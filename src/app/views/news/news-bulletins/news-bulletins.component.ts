import {Component, OnInit, DoCheck} from '@angular/core';
import {News} from '../../../class';
import {animations} from '../../../animations';
import {Modal, Toast} from 'ng-zorro-antd-mobile';
import {Router} from '@angular/router';
import {NewsService} from '../../../service';
import {xmlData} from '../../../utils/xmlData';
import {Dialog} from '../../../utils/dialog';

@Component({
    selector: 'app-news-bulletins',
    templateUrl: './news-bulletins.component.html',
    styleUrls: ['./news-bulletins.component.styl'],
    animations: animations,
    providers: [Toast]
})
export class NewsBulletinsComponent implements OnInit, DoCheck {
    public tabIdx = 0;

    private mousePos: {
        x: number;
        y: number;
    };

    public news = {
        list: [],
        pageParam: {
            schoolId: 606,
            type: 1,
            pageIndex: 1,
            pageSize: 10
        },
        hasMore: true,
        pullState: {
            direction: 'up',
            refreshState: {
                currentState: 'deactivate',
                drag: false
            },
            height: {height: '100%'}
        }
    };

    public bulletins = {
        list: [],
        pageParam: {
            schoolId: 606,
            type: 2,
            pageIndex: 1,
            pageSize: 10
        },
        hasMore: true,
        pullState: {
            direction: 'up',
            refreshState: {
                currentState: 'deactivate',
                drag: false
            },
            height: {height: '100%'}
        }
    };

    constructor(
        private _modal: Modal,
        private _toast: Toast,
        private route: Router,
        private newsService: NewsService
    ) {
    }

    ngOnInit() {
        this.getNews(this.news.pageParam);
        this.getNews(this.bulletins.pageParam);
    }

    ngDoCheck() {
        // 实时检测，无更多内容时不显示刷新提示
        if (!this.news.hasMore) {
            this.news.pullState.refreshState.currentState = '';
        }

        if (!this.bulletins.hasMore) {
            this.bulletins.pullState.refreshState.currentState = '';
        }
    }

    tabsClick(idx) {
        // tab标签栏切换
        this.tabIdx = idx;
    }

    touchstart(event) {
        this.mousePos = {
            x: Number(event.touches[0].pageX),
            y: Number(event.touches[0].pageY)
        };
    }

    touchend(event) {
        const offsetY = Number(event.changedTouches[0].pageY) - this.mousePos.y;
        const offsetX = Number(event.changedTouches[0].pageX) - this.mousePos.x;
        if (Math.abs(offsetX) > 10 && Math.abs(offsetY) < 50) {
            if (offsetX < 0) {
                // 左滑
                this.tabIdx = 1;
            } else {
                // 右滑
                this.tabIdx = 0;
            }
        }
    }

    delete(news: News) {
        // confirm to delete the news of id
        Dialog.confirm('确认消息', '您确定要删除数据？删除后将无法找回！',
            () => {
                Toast.loading('Loading...', 2000, () => {
                    this.newsService.deleteNewsById(news.Id)
                        .subscribe((res) => {
                            const {Code, Status} = xmlData(res);
                            if (Code === 200 && Status) {
                                if (this.tabIdx === 0) {
                                    this.news.list = this.news.list.filter((n) => n !== news);
                                } else {
                                    this.bulletins.list = this.bulletins.list.filter((n) => n !== news);
                                }
                                Toast.show('删除成功！', 2000);
                            }
                        });
                });
            },
        );
    }

    ImgBoxTap(id: number) { // 带id跳转页面
        this.route.navigate(['/news/details', id]);
    }

    getNews(param) {
        this.newsService.getNews(param)
            .subscribe((news) => {
                const {Code, Status, Data} = xmlData(news);
                console.log(Data);
                if (Code === 200 && Status) {
                    if (param.type === 1) {
                        this.news.list = Data.Data;
                        this.hasMore(Data);
                    } else {
                        this.hasMore(Data, 1);
                        this.bulletins.list = Data.Data;
                        this.bulletins.hasMore = Data.Total > Data.PageIndex * Data.PageSize;
                    }
                }
            });
    }

    pullToRefresh() {
        // 新闻页面无更多内容时，不请求和提示完成刷新
        if (this.tabIdx === 0 && !this.news.hasMore) {
            return;
        }
        // 公告页面无更多内容时，不请求和提示完成刷新
        if (this.tabIdx === 1 && !this.bulletins.hasMore) {
            return;
        }

        let paraObj;
        if (this.tabIdx === 0) {
            this.news.pageParam.pageIndex++;
            paraObj = this.news.pageParam;
        } else {
            this.bulletins.pageParam.pageIndex++;
            paraObj = this.bulletins.pageParam;
        }
        // 获取更多内容
        this.newsService.getMoreNews(paraObj)
            .subscribe((news) => {
                const {Code, Status, Data} = xmlData(news);
                console.log(Data);
                if (Code === 200 && Status) {
                    if (this.tabIdx === 0) {
                        this.news.list = this.news.list.concat(Data.Data);
                        this.hasMore(Data);
                    } else {
                        this.bulletins.list = this.bulletins.list.concat(Data.Data);
                        this.hasMore(Data, 1);
                    }
                }
            });
    }

    hasMore(paramObj, tabIdx: number = 0) {
        if (tabIdx === 0) { // 通过paramObj中值来判断分页是否结束
            this.news.hasMore = paramObj.Total > paramObj.PageIndex * paramObj.PageSize;
        } else {
            this.bulletins.hasMore = paramObj.Total > paramObj.PageIndex * paramObj.PageSize;
        }
    }
}
