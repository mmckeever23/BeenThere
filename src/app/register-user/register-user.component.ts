import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit{

  user: User = new User();

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {
      
  }

  userRegister(){
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe({
      next: (data) => {
        alert("New account created!");
      },
        error: (error) => {
          alert("There was a problem creating a new account.");
        }
    })
  }




}
