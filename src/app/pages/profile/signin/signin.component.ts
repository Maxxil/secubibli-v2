import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninModel } from '@model/signin.model';
import { AccountService } from '@service/account/account.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  fg: FormGroup;
  constructor(private fb: FormBuilder, private accountService: AccountService) {
    this.fg = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  register(){
    if(this.fg.valid){
      console.log(this.fg.value);
      this.accountService.register(this.fg.value).subscribe((res) => {
        this.accountService.login(this.fg.value.username, this.fg.value.password).subscribe((res) => {
          
        })
      })
    }
  }
}
