import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { UserService } from '../service/user.service';


export class User{

  role : string [] = ["USER"];

  constructor(){

  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  submitted: boolean = false;

  constructor(public nav : NavbarService,private userService :UserService) { 
    nav.hide();
  }

  ngOnInit(): void {
  }


  registerUser(data: any){ 

    data.role = ["USER"];

    this.userService.register(data).subscribe(response => {
      console.log(response);
    })

    console.log(data);
  }

}