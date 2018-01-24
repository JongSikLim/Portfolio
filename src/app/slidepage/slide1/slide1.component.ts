import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-slide1',
  templateUrl: './slide1.component.html',
  styleUrls: ['./slide1.component.css']
})
export class Slide1Component implements OnInit {
  @Input() takeValue;
  i : number;
  
  constructor() { }

  ngOnInit() {
   
  }

}
