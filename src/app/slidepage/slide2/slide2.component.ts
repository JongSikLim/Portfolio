import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes, stagger, query } from '@angular/animations';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
@Component({
  selector: 'app-slide2',
  templateUrl: './slide2.component.html',
  styleUrls: ['./slide2.component.css'],
  animations:[
    trigger('image-field',[
      state('slide1',style({
        visibility: 'hidden',
        opacity:'0',
        transform:'translateX(-50%)'
      })),
      state('slide2',style({
        visibility: 'visible',
        opacity:'1',
        transform:'translateX(0)'
      })),
      transition('slide1 => slide2', animate('1s ease-in-out')),
      transition('slide2 => slide1', animate('1s ease-in-out'))
    ]),
    trigger('text-field',[
      state('slide1',style({
        visibility: 'hidden',
        opacity:'0',
        transform:'translateX(50%)'
        
      })),
      state('slide2',style({
        visibility: 'visible',
        opacity:'1',
        transform:'translateX(0)'
      })),
      transition('slide1 => slide2', animate('1s ease-in-out')),
      transition('slide2 => slide1', animate('1s ease-in-out'))
    ]),
    trigger('link-1',[
      state('slide1',style({
        transform:'translateY(1000%)'
        
      })),
      state('slide2',style({
        transform:'translateY(0)'
      })),
      transition('slide1 => slide2', animate('0.8s 1s ease-in-out')),
      transition('slide2 => slide1', animate('1s ease-in-out'))
    ]),
  ]
})
export class Slide2Component implements OnInit {
  loadState : string = 'title';
  cutedString = this.router.url.slice(7,15);

  constructor(private router: Router) {          
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.loadState = event.url.slice(7,15);
        console.log(this.loadState);
      }
    })
  }
 
  ngOnInit() {
   
  }
  

}
