import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { AuthResponseModel } from '@model/auth-response.model';
import { AccountService } from '@service/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  fg: FormGroup;
  errorMessage: string;
  showError: boolean = false;


  constructor(private fb: FormBuilder, private accountService: AccountService){

  }

  ngOnInit(): void {
    this.fg = this.fb.group({
      username: ['', [Validators.required, Validators.pattern("[A-Za-z0-9.@]+")]],
      password: ['', [Validators.required, Validators.pattern('^((?!.*[s])(?=.*[A-Z])(?=.*d).{8,99})')]]
    })
  }

  login(){
    this.accountService.login(this.fg.value.username, this.fg.value.password).subscribe({
      next: (res: AuthResponseModel) => {
        localStorage.setItem("token", res.token);
        this.accountService.sendAuthStateChangeNotification(res.isAuthSuccessfull);
        this.showError = false;
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.message
        this.showError = true;
      }
    });
  }

}
