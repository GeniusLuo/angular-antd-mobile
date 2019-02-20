/**
 * @desc 定义常用的数据类
 */

import Mock from 'mockjs';
import {News} from '../../class';

const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3';

const newsArray: News[] = [];
for (let q = 0; q < 50; q++) {
    newsArray.push(
        Mock.mock({
            id: '@increment',
            title: '@title(5, 10)',
            imgUrl: image_uri,
            date: '@date',
            time: '@time',
            content: 'hello every one',
            owner: 'GeniusLuo',
            readTime: '@natural(1, 10)'
        })
    );
}

export {newsArray};
