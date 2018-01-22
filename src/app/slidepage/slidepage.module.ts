import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MnFullpageModule } from 'ngx-fullpage';

import { Slide1Component } from './slide1/slide1.component';
import { Slide2Component } from './slide2/slide2.component';
import { SlideCoreComponent } from './core/core.component';

@NgModule({
  imports: [
    CommonModule,
    MnFullpageModule
  ],
  exports:[Slide1Component, Slide2Component],
  declarations: [
    Slide1Component,
    Slide2Component, 
    SlideCoreComponent

  ],
  
})
export class SlidepageModule { }
