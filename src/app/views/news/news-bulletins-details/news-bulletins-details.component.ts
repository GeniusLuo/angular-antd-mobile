import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../../service';
import {ActivatedRoute} from '@angular/router';
import {NewsDetails} from '../../../class';
import {Toast} from 'ng-zorro-antd-mobile';
import {xmlData} from '../../../utils/xmlData';

@Component({
    selector: 'app-news-bulletins-details',
    templateUrl: './news-bulletins-details.component.html',
    styleUrls: ['./news-bulletins-details.component.styl'],
    providers: [Toast]
})
export class NewsBulletinsDetailsComponent implements OnInit {

    public newsDetails: NewsDetails;

    public showNewsDetails = false;

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
        this.newsService.getNewsById(id)
            .subscribe((res) => {
                const {Code, Data} = xmlData(res);
                if (Code === 200) {
                    console.log(Data);
                    this.showNewsDetails = true;
                    this.newsDetails = Data;
                }
            });
    }

    inform() {
        Toast.show('通知成功！', 3000);
    }

}
