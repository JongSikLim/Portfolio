import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryPageCoreComponent } from './core/core.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports :[HistoryPageCoreComponent,ContentComponent],
  declarations: [HistoryPageCoreComponent, ContentComponent]
})
export class HistorypageModule { }
