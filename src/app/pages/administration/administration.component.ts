import { ArticleService } from './../../services/article/article.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleModel } from 'src/app/model/article.model';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  fg: FormGroup;
  articles: ArticleModel[];
  siteKey: string = "6LfemKMhAAAAAM-5-Jvk_cUzEkFiRIoGDbS5cxEi";

  constructor(private fb: FormBuilder, private articleService: ArticleService, 
    private toastrService: ToasterService, private reCaptchaV3Service: ReCaptchaV3Service) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      title: ['', [Validators.required]],
      text: ['', [Validators.required]],
      type: ['', [Validators.required]],
      email: ['', [Validators.required]],
      
    });

    this.getArticles();
  }

  getArticles(){
    this.articleService.get()
      .subscribe(result => {
        console.log(result);
        this.articles = result;
      });
  }

  updateArticle(item: ArticleModel) {
    if(this.fg.valid){
      this.toastrService.default("Update in progess...");

      console.log(this.fg.value);
      
      this.articleService.update(item._id,this.fg.value).subscribe(
        (result) => {
          this.toastrService.success("Article updated");
          this.getArticles();
        }
      )
    }
  }

  deleteArticle(article: ArticleModel){
    this.articleService.delete(article._id).subscribe((result) => {
      this.articles.forEach((value , index) => {
        if(value == article) {
          this.articles.splice(index, 1);
        }
      })
    })
  }

  validateArticle(article: ArticleModel){
    this.articleService.validate(article._id).subscribe((result) => {
      console.log(result);
    })
  }

  expandArticle(article: ArticleModel){
    console.log("Expand article");
    // this.fg.value.title = article.title;
    console.log(article);
    this.fg.setValue(
      {
        title: article.title, 
        text: article.text, 
        type: article.type,
        email: article.email ?? ""
      });
  }


}
