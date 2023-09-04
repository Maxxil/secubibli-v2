import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from '@pages/pages.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import { MatOptionExtensionDirective } from './directives/mat-option-extension/mat-option-extension.directive';
// import { AppSelectComponent } from './extension/app-select/app-select.component';
// import { AppOptionComponent } from './extension/app-option/app-option.component';
// import { OptionComponent } from './extension/option/option.component';
// import { SelectComponent } from './extension/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    // MatOptionExtensionDirective,
    // AppSelectComponent,
    // AppOptionComponent,
    // OptionComponent,
    // SelectComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
