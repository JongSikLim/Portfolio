import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionPageCoreComponent } from './core/core.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [IntroductionPageCoreComponent],
  declarations: [IntroductionPageCoreComponent, ContentComponent]
})
export class IntroductionModule { }
