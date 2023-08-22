export class ArticleModel{
    _id: string;
    title: string;
    text: string;
    type: string;
    email: string;
    gdpr: boolean;

    constructor(value: any){
        this.title = value.title;
        this.text = value.text;
        this.type = value.type;
        this.email = value.email;
        this.gdpr = value.gdpr;
    }
}