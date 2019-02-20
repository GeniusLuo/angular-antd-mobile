/**
 * @desc 定义常用的数据类
 */

// 定义News类：新闻公告类
export class News {
    constructor(
        public Author: string,
        public Content: string,
        public DatePublish: string,
        public Enable: string,
        public Id: number,
        public IsJump: boolean,
        public ReadCount: number,
        public SchoolID: number,
        public SchoolName: string,
        public ShortTitle: string,
        public ThumbTitlePic: string,
        public Title: string,
        public TitlePic: string,
        public Top: string,
        public Type: string,
        public Url: string
    ) {
    }
}
