import {Component, OnInit} from '@angular/core';
import {News} from '../../../class/news';
import {animations} from '../../../animations/animations';

@Component({
    selector: 'app-news-bulletins',
    templateUrl: './news-bulletins.component.html',
    styleUrls: ['./news-bulletins.component.css'],
    animations: animations,
})
export class NewsBulletinsComponent implements OnInit {

    tabIdx = 0;

    private mousePos: {
        x: number,
        y: number
    };

    newsArray: object[] = [
        new News('标题', 'https://via.placeholder.com/300x200', '2019-02-11', 'GeniusLuo', 5),
        new News('标题2', 'https://via.placeholder.com/300x200', '2019-02-11', 'GeniusLuo', 2),
        new News('标题2', 'https://via.placeholder.com/300x200', '2019-02-11', 'GeniusLuo', 2),
    ];

    constructor() {
    }

    ngOnInit() {
    }

    tabsClick(idx) { // tab标签栏切换
        this.tabIdx = idx;
    }

    touchstart(event) {
        this.mousePos = {
            x: Number(event.touches[0].pageX),
            y: Number(event.touches[0].pageY)
        };
    }

    touchend(event): any {
        const offsetY = Number(event.changedTouches[0].pageY) - this.mousePos.y;
        const offsetX = Number(event.changedTouches[0].pageX) - this.mousePos.x;
        if (Math.abs(offsetX) > 10 && Math.abs(offsetY) < 50) {
            if (offsetX < 0) {   // 左滑
                this.tabIdx = 1;
            } else {  // 右滑
                this.tabIdx = 0;
            }
        }
    }
}
