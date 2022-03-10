import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {BodyComponent} from './shared/body/body.component';
<<<<<<< HEAD
import {EmployeeModule} from "./feature/employee/employee.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserModule} from './feature/user/user.module';
import {HttpClientModule} from "@angular/common/http";
=======
import {EmployeeModule} from './feature/employee/employee.module';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
>>>>>>> employee-create-BaoNHG


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
<<<<<<< HEAD
    BodyComponent,
=======
    BodyComponent
>>>>>>> employee-create-BaoNHG
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    EmployeeModule,
    UserModule
=======
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
>>>>>>> employee-create-BaoNHG
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
