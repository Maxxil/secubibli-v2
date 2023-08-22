import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { PermissionModel } from '@model/permission.model';
import { UserModel } from '@model/user.model';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  userSource: UserModel[];
  permissionSource: PermissionModel[];

  constructor(){
    
  }

  ngOnInit(): void {
    
  }

  resetPassword(_id: string){
    console.log("The password will be reset");
  }

}
