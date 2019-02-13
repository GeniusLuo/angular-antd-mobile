import {Injectable} from '@angular/core';
import {News} from '../class/news';
import {Observable, of} from 'rxjs';
import {newsArray} from '../mock/mock-news';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    constructor() {
    }

    getNews(): Observable<News[]> {
        return of(newsArray);
    }

    getNewsById(id: number): News {
        return newsArray.filter(news => news.id === id)[0];
    }
}
