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
import { ViewModalComponent } from './view-modal/view-modal.component';
import { UpdatePinComponent } from './update-pin/update-pin.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { ListModalComponent } from './list-modal/list-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PinModalComponent,
    UserLoginComponent,
    RegisterUserComponent,
    ViewModalComponent,
    UpdatePinComponent,
    DeleteModalComponent,
    ListModalComponent,
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
