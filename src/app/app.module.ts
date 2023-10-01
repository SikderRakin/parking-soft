import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProvider } from './interceptor';
import { GlobalErrorHandler } from './erro-handlers/global-error-handler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    httpInterceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
