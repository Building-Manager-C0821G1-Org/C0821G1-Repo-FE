import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {BodyComponent} from './shared/body/body.component';
import {SpaceModule} from './feature/space/space.module';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerModule} from 'ngx-bootstrap-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {environment} from '../environments/environment';
import { AngularFireModule } from '@angular/fire';


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
    SpaceModule,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
