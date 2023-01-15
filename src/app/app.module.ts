import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PinModalComponent } from './pin-modal/pin-modal.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';
import { PinDataComponent } from './pin-data/pin-data.component';

@NgModule({
  declarations: [
    AppComponent,
    PinModalComponent,
    UserLoginComponent,
    RegisterUserComponent,
    PinDataComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgbModule,
    FormsModule,
  ],
  providers: [
    NgbActiveModal,
    NgbModal],
  bootstrap: [AppComponent],
  entryComponents: [PinModalComponent],
  exports: [AppComponent]
})
export class AppModule { }
