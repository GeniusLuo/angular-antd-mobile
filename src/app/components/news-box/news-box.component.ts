import {Component, OnInit, Input} from '@angular/core';


@Component({
    selector: 'app-news-box',
    templateUrl: './news-box.component.html',
    styleUrls: ['./news-box.component.css']
})
export class NewsBoxComponent implements OnInit {
    @Input()
    news;

    constructor() {
    }

    ngOnInit() {
    }

}
