import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  ARTICLE_ROUTE,
  ARTICLE_ADD_ROUTE,
} from "./utils/consts";
import AuthPage from "./pages/AuthPage";
import ArticlePage from "./pages/ArticlePage";
import HomePage from "./pages/HomePage";
import AddArticlePage from "./pages/AddArticlePage";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: AuthPage,
  },
];

export const authRoutes = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: ARTICLE_ROUTE + "/:id",
    Component: ArticlePage,
  },
  {
    path: ARTICLE_ADD_ROUTE,
    Component: AddArticlePage,
  },
];
