import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger, keyframes } from '@angular/animations';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  animations:[
    trigger('greeting',[
      state('*',style({
        visibility: 'hidden',
        opacity:0,
      })),
      state('load',style({ 
        visibility: 'visible',
        opacity:1,                
      })),
      transition('* => load', animate('2s ease-in'))
    ])
  ]
})
export class TitleComponent implements OnInit {

  greetingState:string='null';
  constructor() { }

  ngOnInit() {
    console.log(this.greetingState);
    this.greetingState = 'load';
    console.log(this.greetingState);
  }

}
