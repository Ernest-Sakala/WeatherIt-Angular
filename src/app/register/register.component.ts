import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { FileserviceService } from '../service/fileservice.service';
import { UserService } from '../service/user.service';


export interface ImageResponse {
  message :string;
  imageUrl :string;
}



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fileToUpload : File | null = null;
  submitted: boolean = false;
  image:string = "../../assets/placeholder.png";

  constructor(public nav : NavbarService,private userService :UserService, private fileService : FileserviceService) { 
    nav.hide();
  }

  ngOnInit(): void {
  }

  handleFileInput(event : Event){

    const element = event.currentTarget as HTMLInputElement;
    var files =  element.files as FileList;

    this.fileToUpload = files.item(0);

    console.log(this.fileToUpload);

    this.fileService.postFile(this.fileToUpload!).subscribe((response : ImageResponse) =>{

      this.image = response.imageUrl;

      console.log(this.image);
    })

        
  }

  


  registerUser(data: any){ 

    data.role = ["USER"];

    this.userService.register(data).subscribe(response => {
      console.log(response);
    })

    console.log(data);
  }

}
