import { Component, OnInit } from '@angular/core';
import { MaterialModule} from '../material/material/material.module'
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public nav : NavbarService) { }

  ngOnInit(): void {
  }

}
