import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainpageModule } from './mainpage/mainpage.module';
import { HistorypageModule } from './historypage/historypage.module';
import { IntroductionModule } from './introduction/introduction.module';
import { AwardModule } from './award/award.module';

import { MainPageCoreComponent } from './mainpage/core/core.component';
import { HistoryPageCoreComponent } from './historypage/core/core.component';
import { IntroductionPageCoreComponent } from './introduction/core/core.component';
import { AwardPageCoreComponent } from './award/core/core.component';
import { SlidepageModule } from './slidepage/slidepage.module';
import { SlideCoreComponent } from './slidepage/core/core.component';

const routes : Routes = [
  {path: '', redirectTo:'slide', pathMatch:'full'},
  {path: 'slide', component: SlideCoreComponent },
  {path: 'main', component: MainPageCoreComponent},
  {path: 'history', component: HistoryPageCoreComponent},
  {path: 'introduction', component: IntroductionPageCoreComponent},
  {path: 'award', component: AwardPageCoreComponent}
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule, 
    MainpageModule, 
    HistorypageModule, 
    IntroductionModule,
    SlidepageModule,
    AwardModule, 
    RouterModule.forRoot(routes)
  ],
  exports :[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
