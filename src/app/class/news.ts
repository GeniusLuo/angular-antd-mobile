/**
 * @desc 定义常用的数据类
 */

// 定义News类：新闻公告类
export class News {
    constructor(
        public id: number,
        public title: string,
        public imgUrl: string,
        public date: string,
        public time: string,
        public content: string,
        public owner: string,
        public readTime: number,
    ) {
    }
}
