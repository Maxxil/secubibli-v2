import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '@service/account/account.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit{
  fg: FormGroup;

  constructor(private fb: FormBuilder, private accountService: AccountService){

  }

  get f(){
    return this.fg.controls;
  }

  ngOnInit(): void {
    this.fg = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  
  login(){
    this.accountService.login(this.fg.value.email, this.fg.value.password)
      .pipe(first())
      .subscribe( {
        next: () => {
        },
        error: (error) => {
          console.error(error);
        }
      })
  }

}
