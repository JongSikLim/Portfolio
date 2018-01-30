import { Component, Input } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { OpenSidebarService } from './open-sidebar.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('slideInOut',[
      state('in', style({        
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(80%,0,0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
    trigger('sidebarInOut',[
      state('in', style({
        opacity:'0.6'
      })),
      state('out', style({
        opacity:'1'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  msg : string = 'out';
  subscription: Subscription;
  constructor(private osService: OpenSidebarService){
    this.subscription = this.osService.checkState().subscribe(msg=>{this.msg=msg;});
  }
  ngOnDestroy() {
      
    this.subscription.unsubscribe();
  }
  changeLis
  

  toggleMenu(){  
  }
  toggleMenu2(){
    console.log("test");
  }
}
