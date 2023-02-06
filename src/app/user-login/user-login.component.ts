import { Component, Input, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:User = new User();
  data = '';

  constructor(private loginuserservice: LoginuserService, private modalService: NgbModal, private activeModalService: NgbActiveModal) {}

  ngOnInit(): void {      
  }

  userLogin(login: NgForm){
    this.loginuserservice.loginUser(this.user).subscribe({
      next: (data) => {
        const userDetails = JSON.parse(JSON.stringify(data));
        sessionStorage.setItem("currentUserId", userDetails.id)
        // console.log(sessionStorage.getItem("currentUserId"));
        this.activeModalService.dismiss();
      // let string = JSON.stringify(data);
      // string = string.substring(string.indexOf(":")+1);
      // string = string.substring(0, string.indexOf(","));
      // let idForTable = Number(string);
    },
      error: (error) => {
        alert("Username and/or password not correct.");
      }
    })
    login.reset();
  }

  openRegisterModal() {
    const modalRef = this.modalService.open(RegisterUserComponent, {size: 'md', backdrop: 'static', modalDialogClass: 'modal-dialog-centered'});
    modalRef.componentInstance.data = this.data;
  }

}
