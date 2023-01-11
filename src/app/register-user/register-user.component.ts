import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit{

  user: User = new User();

  constructor(private registerService: RegisterService, private modalService: NgbModal) {}

  ngOnInit(): void {
      
  }

  userRegister(){ 
    this.registerService.registerUser(this.user).subscribe({
      next: (data) => {
        alert("New account created!");
        // this.modalService.dismissAll;

        //need to dismiss just the "register-user" modal, not the "user-login" modal.
      },
        error: (error) => {
          alert("There was a problem creating a new account.");
        }
    })
  }




}
