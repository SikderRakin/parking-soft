import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorNameInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Modify the request or perform any other tasks
    // before sending the request to the server

    // Example: Adding an authorization header
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: 'Bearer token',
      },
    });

    // Pass the modified request to the next interceptor or the HTTP handler
    return next.handle(modifiedRequest);
  }
}
