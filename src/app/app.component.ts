import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'WeatherIt';

  constructor(public nav : NavbarService){

    
  }


}
