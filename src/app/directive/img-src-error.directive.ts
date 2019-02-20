import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
    selector: '[appErrSrc]'
})
export class ImgSrcErrorDirective {
    // 使用依赖注入的方式，el 代表使用指令的控件
    constructor(private el: ElementRef) {
    }

    // 定义默认未传时的默认值
    @Input() defaultUrl = 'https://via.placeholder.com/300x200';

    // 接收errUrl的值
    @Input('appErrSrc') errUrl: string;

    // 监听Image的onerror事件
    @HostListener('error') onError() {
        console.log('error');
        this.setImgSrc(this.errUrl || this.defaultUrl);
    }

    // 设置当前元素的src属性
    private setImgSrc(url: string) {
        this.el.nativeElement.src = url;
    }
}
