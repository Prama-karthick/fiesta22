import { Component, OnInit } from '@angular/core';
import { DbUtilityService } from '../db-utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Elist: any;

  constructor(private mydb:DbUtilityService) {
   
   }

  ngOnInit(): void {
  }

  

}
