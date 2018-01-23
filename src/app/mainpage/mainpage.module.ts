
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageCoreComponent } from './core/core.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DetailComponent } from './detail/detail.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  imports: [
    CommonModule, NgbModule.forRoot(), CarouselModule.forRoot()
  ],
  exports: [MainPageCoreComponent, HeaderComponent, ContentComponent, FooterComponent, DetailComponent],
  declarations: [MainPageCoreComponent, HeaderComponent, ContentComponent, FooterComponent, DetailComponent]
})
export class MainpageModule { }
