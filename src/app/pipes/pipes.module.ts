import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from './search-filter/search-filter.pipe';



@NgModule({
  declarations: [
    SearchFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    SearchFilterPipe
  ]
})
export class PipesModule { }
