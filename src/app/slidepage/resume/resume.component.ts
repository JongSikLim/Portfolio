import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes, stagger, query } from '@angular/animations';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  animations: [
    trigger('resume', [
      state('slide3', style({
        opacity : '0'
      })),
      state('slide4', style({
        opacity : '1'
      })),
      transition('slide3 => slide4', animate('0.5s ease-in-out')),
      transition('slide4 => slide3', animate('0.5s ease-in-out'))
    ])
  ]
})
export class ResumeComponent implements OnInit {
  resumeState:string;

  constructor(private router : Router) {
    router.events.forEach((event)=>{
      if(event instanceof NavigationStart){
        this.resumeState = event.url.slice(7,15);
      }
    })
   }

  ngOnInit() {
  }

}
