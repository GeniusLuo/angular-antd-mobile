import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewsBulletinsComponent} from './views/news-bulletins/news-bulletins.component';
import {NewsBulletinsDetailsComponent} from './views/news-bulletins-details/news-bulletins-details.component';
import {NewsBulletinsReleaseComponent} from './views/news-bulletins-release/news-bulletins-release.component';

const routes: Routes = [
    {path: '', redirectTo: '/news', pathMatch: 'full'}, // 重定向路由
    {path: 'news', component: NewsBulletinsComponent},
    {path: 'news/details/:id', component: NewsBulletinsDetailsComponent},
    {path: 'release', component: NewsBulletinsReleaseComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
