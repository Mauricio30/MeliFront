import SearchBox from "./containers/SearchBox";
import StoreProvider from "./context/storeContext";
import withRouter from "./HOCs/withRouter";
import { Router } from "./routes";

const App = () => {
  return (
    <section id="App" className="App">
      <StoreProvider>
        <SearchBox />
      <Router />
      </StoreProvider>
    </section>
  );
};

export default withRouter(App);
