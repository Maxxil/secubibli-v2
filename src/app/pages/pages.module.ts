import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatExpansionModule } from '@angular/material/expansion'
import {MatSelectModule} from '@angular/material/select'
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list'
import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { NgxCaptchaModule } from 'ngx-captcha';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatTabsModule} from '@angular/material/tabs';
import { PagesRoutingModule } from './pages-routing.module';
import { AdministrationComponent } from './administration/administration.component';
import { PagesComponent } from './pages/pages.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { PipesModule } from '@pipes/pipes.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegistrationComponent } from './registration/registration.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserManagementComponent } from './user-management/user-management.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AdministrationComponent,
    PagesComponent,
    SearchComponent,
    HomeComponent,
    AuthenticationComponent,
    RegistrationComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    MatSnackBarModule,
    NgxCaptchaModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    PipesModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatTabsModule,
    MatTableModule,
    MatSlideToggleModule,
    MatMenuModule
  ]
})
export class PagesModule { }
