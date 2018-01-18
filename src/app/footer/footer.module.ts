import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterMainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterMainComponent],
  exports:[FooterMainComponent]
})
export class FooterModule { }
