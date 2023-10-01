import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerErrorInterceptor } from './server-error-handler';
import { InterceptorNameInterceptor } from './auth.interceptor';
import { ApiInterceptor } from './api.interceptor';

export const httpInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ServerErrorInterceptor,
    multi: true,
  },
  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: InterceptorNameInterceptor,
  //   multi: true,
  // },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true,
  },
];
