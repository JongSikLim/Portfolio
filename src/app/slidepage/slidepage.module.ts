import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide1Component } from './slide1/slide1.component';
import { Slide2Component } from './slide2/slide2.component';
import { SlideCoreComponent } from './core/core.component';
import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll';

import { MnFullpageModule } from 'ngx-fullpage';


@NgModule({
  imports: [
    CommonModule,
    SimpleSmoothScrollModule,
    MnFullpageModule.forRoot()
  ],
  exports:[Slide1Component, Slide2Component],
  declarations: [
    Slide1Component,
    Slide2Component, 
    SlideCoreComponent
  ],
  
})
export class SlidepageModule { }
