import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BodyComponent } from './shared/body/body.component';
import {JWT_OPTIONS, JwtHelperService} from '@auth0/angular-jwt';
import {authInterceptorProviders} from './helpers/auth.interceptor';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {SecurityModule} from './feature/security/security.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SecurityModule,
  ],
  providers: [
    authInterceptorProviders,
    JwtHelperService,
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    { provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
