import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {newsRoute} from './router/news';

const routes: Routes = [...newsRoute];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
