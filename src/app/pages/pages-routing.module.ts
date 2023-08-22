import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { SearchComponent } from './search/search.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {
    path: "", 
    component: PagesComponent,
    children:[
      {path:"search/:searchType", component: SearchComponent},
      {
        path: "administration" , 
        component: AdministrationComponent,
        // canActivate: [MsalGuard]
      },
      {
        path:"user-management",
        component: UserManagementComponent
      },
      {
        path: "login",
        component: AuthenticationComponent
      },
      {
        path: "register",
        component: RegistrationComponent
      },
      {
        path: "",
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
