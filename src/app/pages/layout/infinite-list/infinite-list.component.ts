import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { NbCardModule, NbListModule } from '@nebular/theme';
import { NewsPostComponent } from './news-post/news-post.component';
import { NewsPostPlaceholderComponent } from './news-post-placeholder/news-post-placeholder.component';

@Component({
    selector: 'ngx-infinite-list',
    templateUrl: 'infinite-list.component.html',
    styleUrls: ['infinite-list.component.scss'],
    imports: [NbCardModule, NbListModule, NewsPostComponent, NewsPostPlaceholderComponent]
})
export class InfiniteListComponent {


  firstCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  secondCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  pageSize = 10;

  constructor(private newsService: NewsService) {}

  loadNext(cardData) {
    if (cardData.loading) { return; }

    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    this.newsService.load(cardData.pageToLoadNext, this.pageSize)
      .subscribe(nextNews => {
        cardData.placeholders = [];
        cardData.news.push(...nextNews);
        cardData.loading = false;
        cardData.pageToLoadNext++;
      });
  }
}
