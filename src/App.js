import "./assets/style/App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <main className="main">
        <Header />
        <AppRouter />
      </main>
    </BrowserRouter>
  );
};

export default App;
