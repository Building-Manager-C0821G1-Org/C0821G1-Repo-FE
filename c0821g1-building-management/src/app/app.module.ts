import {EmployeeModule} from './feature/employee/employee.module';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FooterComponent} from './shared/footer/footer.component';
import {BodyComponent} from './shared/body/body.component';
import {HeaderComponent} from './shared/header/header.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserModule} from './feature/user/user.module';
// @ts-ignore
import {JWT_OPTIONS, JwtHelperService} from '@auth0/angular-jwt';
import {authInterceptorProviders} from './helpers/auth.interceptor';
import {APP_BASE_HREF} from '@angular/common';
import {SecurityModule} from './feature/security/security.module';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {MatDialogModule} from '@angular/material/dialog';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    SidebarComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    UserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    SecurityModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule
  ],
  providers: [
    authInterceptorProviders,
    JwtHelperService,
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    { provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}





