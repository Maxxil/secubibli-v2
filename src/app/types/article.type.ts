import { environment } from "src/environments/environment";

export const ARTICLE_URL: string = environment.apiUrl + "article/";
export const CREATE_ARTICLE_URL: string = ARTICLE_URL + "create";
export const UPDATE_ARTICLE_URL: string = ARTICLE_URL + "update/";