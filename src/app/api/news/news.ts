import {ajax} from 'rxjs/ajax';

/**
 * @method Ajax
 * @param url 请求地址
 * @param body 请求主体
 * @param responseType 返回数据类型，默认'xml'
 * @param method 请求方法，默认'POST'
 * @returns Observable流
 * @desc 封装rxjs中的ajax方法
 */
export function Ajax(url, body, responseType = 'xml', method = 'POST') {
    return ajax({
        url,
        method,
        responseType,
        body
    });
}
