import SearchBox from "./containers/SearchBox";
import withRouter from "./HOCs/withRouter";
import { Router } from "./routes";

const App = () => {
  return (
    <section id="App" className="App">
      <SearchBox />
      <Router />
    </section>
  );
};

export default withRouter(App);
