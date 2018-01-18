import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardPageCoreComponent } from './core/core.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AwardPageCoreComponent, ContentComponent]
})
export class AwardModule { }
