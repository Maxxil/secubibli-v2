import { ArticleModel } from 'src/app/model/article.model';
import { ArticleService } from './../../services/article/article.service';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchFilterPipe } from '@pipes/search-filter/search-filter.pipe'
import { SearchModel } from '@model/search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  list: ArticleModel[] = [];
  
  displayedList: ArticleModel[] = [];
  searchType: string = "";
  value: string = "";
  isClickedOnce = false;
  currentElement: ArticleModel;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.get().subscribe((result) => {
      this.list = result;
      console.log(this.route);
      this.route.params.subscribe(x => {
        this.isClickedOnce = false;
        this.searchType = x["searchType"];
        this.displayedList = this.list.filter(x => x.type.toLocaleLowerCase() == this.searchType.toLocaleLowerCase());
      });
    })
    
  }

  hasToBeShown(element:SearchModel){
    if(this.value == "" || this.value == null){
      return true;
    }
    else{
      return element.description.includes(this.value) || element.name.includes(this.value);
    }
  }

  displayElement(element: ArticleModel){
    this.isClickedOnce = true;
    this.currentElement = element;
  }

}
