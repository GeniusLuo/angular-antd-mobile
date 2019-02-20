/**
 * @desc 定义常用的数据类
 */

// 定义NewsDtails类：新闻公告详情页中数据类
export class NewsDetails {
    constructor(
        public Author: string,
        public Content: string,
        public DatePublish: string,
        public Enable: string,
        public EnrolUrl: string,
        public HasTitlePic: boolean,
        public Id: number,
        public IfRead: boolean,
        public IsIncludeEnrolUrl: number,
        public IsNeedConfirmRead: number,
        public NoReadCount: number,
        public NoReadUsers: object,
        public ReadCount: number,
        public SchoolID: number,
        public SchoolName: string,
        public ShortTitle: string,
        public Title: string,
        public TitlePic: string,
        public Top: string,
        public Type: string,
        public Url: string
    ) {
    }
}
