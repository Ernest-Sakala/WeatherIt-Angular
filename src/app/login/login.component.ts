import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';
import { UserService } from '../service/user.service';

export interface User{
     type: string,
     id: string,
     username: string,
     email: string,
     roles: string [],
     imageUrl: string,
     accessToken :string,
     tokenType:string
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public nav : NavbarService,private userService : UserService, private router : Router) { 
    nav.hide();
  }

  ngOnInit(): void {
  }

  loginUser(data : any){
    this.userService.login(data).subscribe( (response: User) => {
      
      console.log(response.accessToken);


    });
  }
}
