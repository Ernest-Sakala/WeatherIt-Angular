import { Component, OnInit } from '@angular/core';
import { Weather } from '../account/account.component';
import { NavbarService } from '../navbar.service';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public weather! : Weather;
 
  constructor(public nav : NavbarService,private weatherService : WeatherService) { 
    nav.show();
  }

  ngOnInit(): void {
    
    this.weatherService.getLatestWeather().subscribe(response =>{

      this.weather = response;
    });

  }



}
