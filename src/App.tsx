import { AppRouter } from "./components/AppRouter";
import { BrowserRouter } from 'react-router-dom'
import SiteWrapper from "./components/wrapers/siteWrapper/SiteWrapper";
import "./resources/css/App.css"
import "./resources/css/normalize.css"

function App() {
  return (
    <>
      <SiteWrapper >
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </SiteWrapper>
    </>
  );
}

export default App;
