import { Component, Input, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterUserComponent } from '../register-user/register-user.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:User = new User();
  data = '';

  constructor(private loginuserservice: LoginuserService, private modalService: NgbModal) {}

  ngOnInit(): void {      
  }

  userLogin(){
    this.loginuserservice.loginUser(this.user).subscribe({
      next: (data) => {
      this.modalService.dismissAll();
    },
      error: (error) => {
        alert("Username and/or password not correct.");
      }
    })
  }

  openRegisterModal() {
    const modalRef = this.modalService.open(RegisterUserComponent, {size: 'md', backdrop: 'static', modalDialogClass: 'modal-dialog-centered'});
    modalRef.componentInstance.data = this.data;
  }

}
