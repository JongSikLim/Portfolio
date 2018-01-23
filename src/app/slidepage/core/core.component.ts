import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';
@Component({
  selector: 'app-slide-core',  
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class SlideCoreComponent implements OnInit {

  constructor(public fullpageService: MnFullpageService) {
  }

  
  ngOnInit() {
    
  }
  test(){
    console.log("testing");
  }
  
  

}
