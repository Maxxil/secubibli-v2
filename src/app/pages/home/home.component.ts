import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '@service/article/article.service';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { ArticleModel } from '@model/article.model';
import { ToasterService } from '@service/toaster/toaster.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fg: FormGroup;
  siteKey: string = "6LfemKMhAAAAAM-5-Jvk_cUzEkFiRIoGDbS5cxEi";

  constructor(private fb: FormBuilder, private articleService: ArticleService, 
    private toastrService: ToasterService, private reCaptchaV3Service: ReCaptchaV3Service) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      title: ['', [Validators.required]],
      text: ['', [Validators.required]],
      type: ['', [Validators.required]],
      email: ['', [Validators.required]],
      gdpr: ['',[Validators.required]],
      recaptcha: ['', [Validators.required]]
    });
  }

  

  onSubmit(){
    console.log(this.fg.errors)
    console.log(this.fg.get('email')?.errors);
    console.log(this.fg.get('title')?.errors);
    console.log(this.fg.get('text')?.errors);
    console.log(this.fg.get('type')?.errors);
    console.log(this.fg.get('gdpr')?.errors);
    console.log(this.fg.get('recaptcha')?.errors);
    console.log(this.fg.value);
    if(this.fg.valid){
      this.toastrService.default("Creation in progress...");
      this.articleService.create(new ArticleModel(this.fg.value)).subscribe(
        (result) => {
          this.toastrService.success("Article created");
          console.log(result);
        }
      )
    }
  }

}
