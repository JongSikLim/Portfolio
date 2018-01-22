import { Component, OnInit } from '@angular/core';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
import { SimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';



@Component({
  selector: 'app-slide-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class SlideCoreComponent implements OnInit {


  constructor(private smooth: SimpleSmoothScrollService) { }
  
  ngOnInit() {
    
  }
  test(){
    console.log("testing");
  }
  
  

}
