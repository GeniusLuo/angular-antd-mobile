import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdMobileModule, ModalServiceComponent, ToastComponent} from 'ng-zorro-antd-mobile';
import {newsArr} from './router/news';
import {ImgSrcErrorDirective} from './directive/img-src-error.directive';

@NgModule({
    declarations: [...newsArr, AppComponent, ImgSrcErrorDirective],
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
