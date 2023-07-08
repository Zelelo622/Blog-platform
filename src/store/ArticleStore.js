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

  updateArticle(updatedArticle) {
    const index = this._articles.findIndex(
      (article) => article.id === updatedArticle.id
    );
    if (index !== -1) {
      this._articles[index] = updatedArticle;
    }
  }

  get articles() {
    return this._articles;
  }
}
