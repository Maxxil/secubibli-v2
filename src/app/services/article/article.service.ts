import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleModel } from 'src/app/model/article.model';
import { ARTICLE_URL, CREATE_ARTICLE_URL, UPDATE_ARTICLE_URL } from 'src/app/types/BackendUrl.type';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  create(article: ArticleModel): Observable<any>{
    console.log("Create article " + CREATE_ARTICLE_URL);
    return this.http.post(CREATE_ARTICLE_URL,article);
  }

  get(): Observable<ArticleModel[]>{
    return this.http.get<ArticleModel[]>(ARTICLE_URL);
  }

  getOne(id: string): Observable<ArticleModel>{
    return this.http.get<ArticleModel>(ARTICLE_URL+id);
  }

  delete(id: string):Observable<any>{
    return this.http.delete(ARTICLE_URL+ id);
  }

  validate(id: string): Observable<any>{
    return this.http.patch(ARTICLE_URL + id, null);
  }

  update(id: string, article: ArticleModel):Observable<any>{
    return this.http.post(UPDATE_ARTICLE_URL+id, article);
  }
}
