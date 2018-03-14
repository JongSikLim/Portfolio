import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';




@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  imgVisible : boolean = false;

  
  constructor() { 
    
  }
  ngOnInit() {
    
  }
  open1(){
    let reward = document.getElementById('reward');
    let license = document.getElementById('license');
    let family = document.getElementById('family');
    console.log(reward);
    license.classList.remove('show');
    family.classList.remove('show');
  }
  open2(){
    let reward = document.getElementById('reward');
    let license = document.getElementById('license');
    let family = document.getElementById('family');
    console.log('open2');
    reward.classList.remove('show');
    family.classList.remove('show');
  }
  open3(){
    let reward = document.getElementById('reward');
    let license = document.getElementById('license');
    let family = document.getElementById('family');
    console.log('open3');
    license.classList.remove('show');
    reward.classList.remove('show');
  }

}
