import { MainPage } from "@/pages/MainPage";
import "./styles/globals.scss";
import "./App.scss";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";

export const App = () => {
  return (
    <div className={'app'}>
      <div className="app-row">
        <div className="row">
          <Header/>
          <MainPage />
        </div>
        <Footer className="footer" />
      </div>
    </div>
  );
};
