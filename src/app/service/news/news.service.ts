import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {Ajax} from '../../api/news/news';
import {objToFormData} from '../../utils/objToFormData';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    private getNewsUrl = 'http://d.wkbaobao.com/Webservice/WkService.asmx/NewsList';
    private getNewsByIdUrl = 'http://d.wkbaobao.com/Webservice/WkService.asmx/News';
    private delNewsUrl = 'http://d.wkbaobao.com/Webservice/WkService.asmx/DelNews';

    getNews(obj: object): Observable<object> {
        return Ajax(this.getNewsUrl, objToFormData(obj))
            .pipe(
                tap(() => console.log('fetched News')),
                catchError(this.handleError('getNews'))
            );
    }

    getMoreNews(obj: object): Observable<object> {
        return Ajax(this.getNewsUrl, objToFormData(obj))
            .pipe(
                tap(() => console.log('fetched more News')),
                catchError(this.handleError('getMoreNews'))
            );
    }


    getNewsById(id: number): Observable<object> {
        const body = objToFormData({
            id: id,
            openId: 'o86LC1QNDWe0LOxsW_eSrv-AE0Z4'
        });
        return Ajax(this.getNewsByIdUrl, body)
            .pipe(
                tap(() => console.log('fetched details')),
                catchError(this.handleError('getNewsById'))
            );
    }

    deleteNewsById(id: number) {
        const body = objToFormData({id: id});
        return Ajax(this.delNewsUrl, body)
            .pipe(
                tap(() => console.log('delete News')),
                catchError(this.handleError('deleteNewsById'))
            );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
