import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

//AppComponent에서 호출하는 컴포넌트 모듈
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { SlidepageModule } from './slidepage/slidepage.module';

//라우팅 및 애니메이션 모듈
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
//ng-bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//서비스
import { OpenSidebarService } from './open-sidebar.service';
import { FooterMainComponent } from './footer/main/main.component';

import { MnFullpageModule } from 'ngx-fullpage';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    NavbarModule,
    BrowserAnimationsModule,
    FooterModule,
    SlidepageModule,
    NgbModule.forRoot(),
    MnFullpageModule.forRoot(),
    AppRoutingModule    
  ],
  exports : [
    RouterModule
  ],
  providers: [OpenSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
