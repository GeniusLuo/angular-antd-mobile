import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdMobileModule, ModalServiceComponent, ToastComponent} from 'ng-zorro-antd-mobile';
import {NewsBulletinsComponent} from './views/news-bulletins/news-bulletins.component';
import {NewsBoxComponent} from './components/news-box/news-box.component';
import {NewsBulletinsDetailsComponent} from './views/news-bulletins-details/news-bulletins-details.component';

@NgModule({
    declarations: [
        AppComponent,
        NewsBulletinsComponent,
        NewsBoxComponent,
        NewsBulletinsDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgZorroAntdMobileModule.forRoot(),
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [ModalServiceComponent, ToastComponent]
})
export class AppModule {
}
