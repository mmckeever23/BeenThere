import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit{

  user: User = new User();

  constructor(private registerService: RegisterService, private modalService: NgbActiveModal) {}

  ngOnInit(): void {
      
  }

  userRegister(){ 
    this.registerService.registerUser(this.user).subscribe({
      next: (data) => {
        alert("New account created!");
        this.modalService.dismiss();
      },
      error: (error) => {
        alert("There was a problem creating a new account.");
      }
    })
  }
}
