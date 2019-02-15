import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../service/news.service';
import {ActivatedRoute} from '@angular/router';
import {News} from '../../class/news';
import {Toast} from 'ng-zorro-antd-mobile';

@Component({
    selector: 'app-news-bulletins-details',
    templateUrl: './news-bulletins-details.component.html',
    styleUrls: ['./news-bulletins-details.component.css'],
    providers: [Toast]
})
export class NewsBulletinsDetailsComponent implements OnInit {

    public news: News;

    constructor(
        private newsService: NewsService,
        private routeInfo: ActivatedRoute,
        private _toast: Toast
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
        Toast.show('通知成功！', 3000);
    }

}
