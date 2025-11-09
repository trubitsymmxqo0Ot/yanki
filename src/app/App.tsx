import { MainPage } from "@/pages/MainPage";
import "./styles/globals.scss";
import "./App.scss";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer/ui/Footer";

export const App = () => {
  return (
      <div className="app">
        <div className="row">
          <Header className="header" />
          <MainPage />
        </div>
        <Footer className="footer" />
      </div>
  );
};
