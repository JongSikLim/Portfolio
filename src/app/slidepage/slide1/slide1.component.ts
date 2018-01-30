
import { Component, OnInit, Input } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes, stagger, query } from '@angular/animations';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';



@Component({
  selector: 'app-slide1',
  templateUrl: './slide1.component.html',
  styleUrls: ['./slide1.component.css'],
  animations:[
    trigger('image-field-1',[
      state('title',style({
        visibility: 'hidden',
        opacity:'0',
        transform:'translateX(-50%)'
      })),
      state('slide1',style({
        visibility: 'visible',
        opacity:'1',
        transform:'translateX(0)'
      })),
      transition('title => slide1', animate('1s ease-in-out')),
      transition('slide1 => title', animate('1s ease-in-out'))
    ]),
    trigger('image-field-2',[
      state('title',style({
        visibility: 'hidden',
        opacity:'0',
        transform:'translateX(-50%)'
        
      })),
      state('slide1',style({
        visibility: 'visible',
        opacity:'1',
        transform:'translateX(0)'
      })),
      transition('title => slide1', animate('1s ease-in-out')), 
      transition('slide1 => title', animate('1s ease-in-out'))
    ]), 
    trigger('text-field-1',[
      state('title',style({
        visibility: 'hidden',
        opacity:'0',
        transform:'translateX(-50%)'
        
      })),
      state('slide1',style({
        visibility: 'visible',
        opacity:'1',
        transform:'translateX(0)'
      })),
      transition('title => slide1', animate('1s ease-in-out')),
      transition('slide1 => title', animate('1s ease-in-out'))
    ]), 
    trigger('text-field-2',[
      state('title',style({
        visibility: 'hidden',
        opacity:'0',
        transform:'translateX(-50%)'
        
      })),
      state('slide1',style({
        visibility: 'visible',
        opacity:'1',
        transform:'translateX(0)'
      })),
      transition('title => slide1', animate('1s ease-in-out')),
      transition('slide1 => title', animate('1s ease-in-out'))
    ]),
    trigger('link-1',[
      state('title',style({
        transform:'translateY(1000%)'
        
      })),
      state('slide1',style({
        transform:'translateY(0)'
      })),
      transition('title => slide1', animate('0.8s 1s ease-in-out')),
      transition('slide1 => title', animate('1s ease-in-out'))
    ]),
  ]

})
export class Slide1Component implements OnInit{
  @Input() takeValue;
  loadState : string = 'title';
  cutedString = this.router.url.slice(7,15);

  constructor(private router: Router) {          
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.loadState = event.url.slice(7,15);
      }
    });
  }


  ngOnInit() {
   
  }
  test(){
    console.log(this.cutedString);
  }
}
