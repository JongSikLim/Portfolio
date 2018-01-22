import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class SlideCoreComponent implements OnInit {


  constructor() { }
  
  ngOnInit() {
    
  }
  test(){
    console.log("testing");
  }
  
  

}
