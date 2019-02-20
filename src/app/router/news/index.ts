import {Routes} from '@angular/router';
import {NewsBulletinsComponent} from '../../views/news';
import {NewsBulletinsDetailsComponent} from '../../views/news';
import {NewsBulletinsReleaseComponent} from '../../views/news';
import {NewsBoxComponent} from '../../components';

export const newsArr = [
    NewsBoxComponent,
    NewsBulletinsComponent,
    NewsBulletinsDetailsComponent,
    NewsBulletinsReleaseComponent
];

export const newsRoute: Routes = [
    {
        path: '',
        redirectTo: '/news',
        pathMatch: 'full'
    },
    {path: 'news', component: NewsBulletinsComponent},
    {path: 'news/details/:id', component: NewsBulletinsDetailsComponent},
    {path: 'release', component: NewsBulletinsReleaseComponent}
    // {path: '**', component: NewsBulletinsComponent} // 404页面
];
