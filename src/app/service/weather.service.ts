import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../account/account.component';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url : string = 'http://ec2-3-83-148-218.compute-1.amazonaws.com:5000/api/weather/all-weather';

  private currentWeatherUrl : string = 'http://ec2-3-83-148-218.compute-1.amazonaws.com:5000/api/weather/latest-weather';

  constructor(private http: HttpClient) { }

  getWeather(){
    return this.http.get<Weather[]>(this.url);
  }

  getLatestWeather(){
    return this.http.get<Weather>(this.currentWeatherUrl);
  }


}
