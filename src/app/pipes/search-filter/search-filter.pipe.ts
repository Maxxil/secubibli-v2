import { ArticleModel } from '@model/article.model';
import { Pipe, PipeTransform } from '@angular/core';
import { SearchModel } from '@model/search.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(values: ArticleModel[], filter: string): ArticleModel[] {
    return values.filter(x => x.title.includes(filter) || x.text.includes(filter) || x.type.includes(filter));
  }

}
