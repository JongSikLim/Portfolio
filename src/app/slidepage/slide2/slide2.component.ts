import { Component, OnInit } from '@angular/core';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
import { SimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';


@Component({
  selector: 'app-slide2',
  templateUrl: './slide2.component.html',
  styleUrls: ['./slide2.component.css']
})
export class Slide2Component implements OnInit {

  constructor(private smooth: SimpleSmoothScrollService) { }
 
  ngOnInit() {
    this.smooth.smoothScrollToAnchor();
  }
  
  goTop(){
    this.smooth.smoothScrollToTop(new SimpleSmoothScrollOption(1000, 'linear'));
  }

}
