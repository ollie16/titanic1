
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { MyserviceService} from '../myservice.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  searcharray: any = [];
  errorMsg: any;
  EditRowID: any = '';

  constructor( private myService: MyserviceService) {
  }

  Edit(value) {
    this.EditRowID = value;
  }

  OnSearch() {
      this.myService.getResult().subscribe(
        (resultData) => this.searcharray = resultData,
        resError => this.errorMsg = resError);
  }

}




