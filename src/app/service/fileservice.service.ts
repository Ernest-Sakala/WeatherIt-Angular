import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageResponse } from '../register/register.component';


@Injectable({
  providedIn: 'root'
})
export class FileserviceService {

  private uploadFileUrl : string = "http://ec2-3-83-148-218.compute-1.amazonaws.com:5000/api/amazon/s3-bucket/upload-file"

  constructor(private http : HttpClient) { }



  postFile(fileToUpload: File){
    
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post<ImageResponse>(this.uploadFileUrl, formData);
      
  }
}
