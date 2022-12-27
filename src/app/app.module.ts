import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenSessionInterceptor } from '@core/interceptors/token-session.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CookieModule.withOptions(),
    HttpClientModule,
  ],
  providers: [{
    useClass:TokenSessionInterceptor,
    provide:HTTP_INTERCEPTORS,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
