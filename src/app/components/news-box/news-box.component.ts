import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {News} from '../../class/news';


@Component({
    selector: 'app-news-box',
    templateUrl: './news-box.component.html',
    styleUrls: ['./news-box.component.css']
})
export class NewsBoxComponent implements OnInit {
    @Input()
    news: News;

    @Output()
    private handleDelete: EventEmitter<number> = new EventEmitter();

    @Output()
    private handleImgBoxTap: EventEmitter<number> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    delete(id: number) { // click delete button
        this.handleDelete.emit(id); // send the id or number to identify the news
    }

    imgBoxTap(id: number) {
        this.handleImgBoxTap.emit(id);
    }

}
