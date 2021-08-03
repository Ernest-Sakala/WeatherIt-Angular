import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url : string = 'http://ec2-3-83-148-218.compute-1.amazonaws.com:5000/api/user/register';
  private loginUrl : string = 'http://ec2-3-83-148-218.compute-1.amazonaws.com:5000/api/user/signIn';

  constructor(private http : HttpClient) { }

  register(data : any){
   return  this.http.post<User>(this.url, data);
  }

  login(data : any){
    return this.http.post<User>(this.loginUrl, data);
  }
}
