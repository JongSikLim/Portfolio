import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainpageModule } from './mainpage/mainpage.module';


import { MainPageCoreComponent } from './mainpage/core/core.component';
import { HistoryPageCoreComponent } from './historypage/core/core.component';
import { IntroductionPageCoreComponent } from './introduction/core/core.component';

import { SlidepageModule } from './slidepage/slidepage.module';
import { SlideCoreComponent } from './slidepage/core/core.component';

const routes : Routes = [
  {path: '', redirectTo:'slide', pathMatch:'full'},
  {path: 'slide', component: SlideCoreComponent },
  {path: 'main', component: MainPageCoreComponent},


  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule, 
    MainpageModule, 
    SlidepageModule,
    RouterModule.forRoot(routes)
  ],
  exports :[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
