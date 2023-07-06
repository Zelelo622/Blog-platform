import { HOME_ROUTE, LOGIN_ROUTE, ARTICLE_ROUTE } from "./utils/consts";
import AuthPage from "./pages/AuthPage";
import ArticlePage from "./pages/ArticlePage";
import HomePage from "./pages/HomePage";

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
    path: ARTICLE_ROUTE,
    Component: ArticlePage,
  },
];
