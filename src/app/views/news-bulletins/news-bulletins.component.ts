import {Component, OnInit} from '@angular/core';
import {News} from '../../class/news';
import {animations} from '../../animations/animations';
import {Modal, Toast} from 'ng-zorro-antd-mobile';
import {Router} from '@angular/router';
import {NewsService} from '../../service/news.service';

@Component({
    selector: 'app-news-bulletins',
    templateUrl: './news-bulletins.component.html',
    styleUrls: ['./news-bulletins.component.css'],
    animations: animations,
    providers: [Toast]
})
export class NewsBulletinsComponent implements OnInit {

    tabIdx = 0;

    private mousePos: {
        x: number,
        y: number
    };

    newsArray: News[];

    state = {
        direction: 'up',
        refreshState: {
            currentState: 'deactivate',
            drag: false
        },
        height: {height: '100%'}
    };

    constructor(
        private _modal: Modal,
        private _toast: Toast,
        private route: Router,
        private newsService: NewsService
    ) {
    }

    ngOnInit() {
        this.getNews();
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

    delete(news: News) { // confirm to delete the news of id
        Modal.alert('确认消息', '您确定要删除数据？删除后将无法找回！', [
            {
                text: '否',
                onPress: () => console.log('cancel'),
                style: {
                    color: '#108ee9'
                }
            },
            {
                text: '是',
                onPress: () => {
                    Toast.loading('Loading...', 2000, () => {
                        this.newsArray = this.newsArray.filter(n => n !== news);
                        Toast.show('删除成功！', 3000);
                    });
                },
                style: {
                    color: '#108ee9',
                }
            }
        ]);
    }

    ImgBoxTap(id: number) {
        this.route.navigate(['/news/details', id]);
    }

    getNews() {
        this.newsService.getNews()
            .subscribe(news => this.newsArray = news); // 这个地方不是赋值而是把内存地址指过来了
    }

    pullToRefresh() {
        this.newsService.getMoreNews()
            .subscribe(news => this.newsArray.push(news));
    }
}
