import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {News} from '../../class/news/news';

@Component({
    selector: 'app-news-box',
    templateUrl: './news-box.component.html',
    styleUrls: ['./news-box.component.styl']
})
export class NewsBoxComponent implements OnInit {
    @Input() news: News;

    @Output() private handleDelete: EventEmitter<News> = new EventEmitter();

    @Output() private handleImgBoxTap: EventEmitter<number> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    delete(news: News) {
        // click delete button
        this.handleDelete.emit(news); // send the id or number to identify the news
    }

    imgBoxTap(id: number) {
        this.handleImgBoxTap.emit(id);
    }
}
