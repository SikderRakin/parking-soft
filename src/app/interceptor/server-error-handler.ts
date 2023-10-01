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

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        ;
        switch (error.status) {
          case 404:
            return throwError(() => new Error('Not Found'));
          case 401:
            return throwError(() => new Error('UnauthorizedPermalink'));
          case 403:
            return throwError(() => new Error('ForbiddenPermalink'));
          case 400:
            return throwError(() => new Error('Bad Request'));
          case 429:
            return throwError(() => new Error('Too Many Requests'));
          case 500:
            return throwError(() => new Error('Internal Server Error'));
          case 502:
            return throwError(() => new Error('Bad Gateway'));
          case 503:
            return throwError(() => new Error('Service Unavailable'));
          case 504:
            return throwError(() => new Error('Gateway Timed Out'));
          case 501:
            return throwError(() => new Error('Not ImplementedPermalink'));
          default:
            return throwError(() => new Error(error.message));
        }
      })
    );
  }
}
