import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { WeatherService } from '../service/weather.service';



export interface Weather {
  id: number;
  temperature: string;
  humidity: string;
  createdAt: string;
}



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  displayedColumns: string[] = ['position', 'temperature', 'humidity', 'day'];
  dataSource : Weather [] = [];


  constructor(public nav : NavbarService, public weatherService : WeatherService) { 
    nav.hide();
  }

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe( (response : Weather[]) => {
      this.dataSource = response;
      console.log(response);
    });
  }

}
