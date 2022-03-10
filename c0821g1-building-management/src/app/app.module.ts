import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BodyComponent } from './shared/body/body.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CustomerModule} from './feature/customer/customer.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {BodyComponent} from './shared/body/body.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {FloorModule} from './feature/floors/floor.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
>>>>>>> e217b7480522119ca6ac8be0b5b13c0d2dd1558d

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    SidebarComponent
<<<<<<< HEAD

=======
>>>>>>> e217b7480522119ca6ac8be0b5b13c0d2dd1558d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    ReactiveFormsModule,
    CustomerModule,
    BrowserAnimationsModule
=======
    FloorModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
>>>>>>> e217b7480522119ca6ac8be0b5b13c0d2dd1558d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
