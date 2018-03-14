import { Component, OnInit, Input, Output, ViewEncapsulation } from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';
import { EventEmitter } from 'selenium-webdriver';
@Component({
  selector: 'app-slide-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class SlideCoreComponent implements OnInit {
  momsData: string = "엄마란다.";
  className: string;
  someProperty;


  constructor(public fullpageService: MnFullpageService) {
  }

  ngOnInit() {

  }
  check(){
    //console.log(this.someProperty);
  }
}

