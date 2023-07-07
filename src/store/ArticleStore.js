import { makeAutoObservable } from "mobx";
import { articles } from "../utils/articleObj";

export default class ArticleStore {
  constructor() {
    this._articles = [...articles];
    makeAutoObservable(this);
  }

  setArticles(articles) {
    this._articles = articles;
  }

  addArticle(article) {
    this._articles.push(article);
  }

  get articles() {
    return this._articles;
  }
}
