import { MainpageModule } from './../mainpage/mainpage.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Slide1Component } from './slide1/slide1.component';
import { Slide2Component } from './slide2/slide2.component';
import { SlideCoreComponent } from './core/core.component';
import { TitleComponent } from './title/title.component';


import { MnFullpageModule } from 'ngx-fullpage';
import { ResumeComponent } from './resume/resume.component';


@NgModule({
  imports: [
    CommonModule,
    MainpageModule,
    MnFullpageModule.forRoot()
  ],
  exports:[Slide1Component, Slide2Component],
  declarations: [
    Slide1Component,
    Slide2Component, 
    SlideCoreComponent, TitleComponent, ResumeComponent

  ],
  
})
export class SlidepageModule { }
