
import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes, stagger, query } from '@angular/animations';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
@Component({
  selector: 'app-slide3',
  templateUrl: './slide3.component.html',
  styleUrls: ['./slide3.component.css'],
  animations:[
    trigger('image-field', [
      state('slide2', style({
        opacity:0,
        transform:'translateX(60%)'
      })),
      state('slide3', style({
        opacity:1,
        transform:'translateX(0)'
      })),
      transition('slide2 => slide3', animate('1s ease-in')),
      transition('slide3 => slide2', animate('1s ease-in')),
    ]),
    trigger('text-field', [
      state('slide2', style({
        opacity:0,
        transform:'translateX(60%)'
      })),
      state('slide3', style({
        opacity:1,
        transform:'translateX(0)'
      })),
      transition('slide2 => slide3', animate('1s ease-in')),
      transition('slide3 => slide2', animate('1s ease-in')),
    ]),
    trigger('link-1', [
      state('slide2', style({
        opacity:0,
        transform:'translateY(1000%)'
      })),
      state('slide3', style({
        opacity:1,
        transform:'translateX(0)'
      })),
      transition('slide2 => slide3', animate('0.8s 1s ease-in')),
      transition('slide3 => slide2', animate('1s ease-in')),
    ]),
  ]
})
export class Slide3Component implements OnInit {
  loadState : string = 'title';
  constructor(private router: Router) {
    router.events.forEach((event)=>{
      if(event instanceof NavigationStart){
        this.loadState = event.url.slice(7,15);
        console.log(this.loadState);
      }
    })
   }

  ngOnInit() {
  }

}
