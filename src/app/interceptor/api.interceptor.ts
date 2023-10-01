import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  public formData!: FormData;

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let apiUrl = `${API_URL}${request.url}`;

    if (request.method === 'PUT' || request.method === 'POST') {
      this.processFormData(request);
      request = request.clone({
        url: apiUrl,
        body: this.formData,
      });
    } else {
      request = request.clone({
        url: apiUrl,
      });
    }

    return next.handle(request);
  }

  private processFormData(request: any): void {
    // reset formData every time
    this.formData = new FormData();
    Object.entries(request.body).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length > 0) {
        let isFile = false;
        value.forEach(item => {
          if (item as any instanceof File) {
            isFile = true;
            this.formData.append(key, item);
          }
        });
        if (!isFile) this.formData.append(key, value as any);
      } else {
        if (value !== null) this.formData.append(key, value as any);
      }
    });
  }
}
