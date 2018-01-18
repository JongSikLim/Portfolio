import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import * as $ from 'jquery';
import { AppComponent } from '../../app.component';
import { OpenSidebarService } from '../../open-sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Output() data = new EventEmitter();
  menuState : string = 'out';
   
  constructor(private osService:OpenSidebarService) {}
  ngOnInit() {
  }
  menuToggle(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.osService.changeState(this.menuState);
  }
}
