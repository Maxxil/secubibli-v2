import { Injectable } from '@angular/core';
import { AccountInfo } from '@azure/msal-browser';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isUserLoggedOn: Subject<boolean> = new Subject<boolean>();
  accountInfo: Subject<AccountInfo|null> = new Subject<AccountInfo|null>();

  constructor() { }
}
