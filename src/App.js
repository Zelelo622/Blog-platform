import "./assets/style/App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <main className="main">
        <AppRouter />
      </main>
    </BrowserRouter>
  );
};

export default App;
