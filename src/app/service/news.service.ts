import {Injectable} from '@angular/core';
import {News} from '../class/news';
import {Observable, of} from 'rxjs';
import {newsArray} from '../mock/mock-news';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import Mock from 'mockjs';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    private newsUrl = 'hello.json'; // URL to web api

    private httpOptions: object = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) {
    }

    getNews(): Observable<News[]> {
        // return this.http.get<News[]>(this.newsUrl)
        //     .pipe(
        //         tap(() => console.log('fetched News'))
        //     );
        return of(newsArray);
    }

    getMoreNews(): Observable<News> {
        const id = newsArray.length + 1;
        const newItem = new News(
            id, `新增${id}`, 'https://via.placeholder.com/300x200', '2019-02-11', '10:00:08', 'hello every one', 'GeniusLuo', 5
        );
        return of(newItem);
    }

    getNewsById(id: number): News {
        return newsArray.filter(news => news.id === id)[0];
    }
}
