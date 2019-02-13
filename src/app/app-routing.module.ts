import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewsBulletinsComponent} from './views/news-bulletins/news-bulletins.component';
import {NewsBulletinsDetailsComponent} from './views/news-bulletins-details/news-bulletins-details.component';

const routes: Routes = [
    {path: '', redirectTo: '/news', pathMatch: 'full'}, // 重定向路由
    {path: 'news', component: NewsBulletinsComponent},
    {path: 'news/details/:id', component: NewsBulletinsDetailsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
