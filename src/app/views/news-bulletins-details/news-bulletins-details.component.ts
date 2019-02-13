import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../service/news.service';
import {ActivatedRoute} from '@angular/router';
import {News} from '../../class/news';

@Component({
    selector: 'app-news-bulletins-details',
    templateUrl: './news-bulletins-details.component.html',
    styleUrls: ['./news-bulletins-details.component.css']
})
export class NewsBulletinsDetailsComponent implements OnInit {

    public news: News;

    constructor(
        private newsService: NewsService,
        private routeInfo: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.getNews();
    }

    getNews() {
        const id = Number(this.routeInfo.snapshot.params.id);
        this.news = this.newsService.getNewsById(id);
    }

    inform() {
        console.log('一键通知');
    }

}
