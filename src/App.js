import React, { Suspense, Component, lazy } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Loading from "./components/loading.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const PageSearchResult = lazy(() => import("./page-search-result.js"));
const PageHomeArtistas = lazy(() => import("./page-home-artistas.js"));
const PageArtist = lazy(() => import("./page-artist.js"));
const Layout = lazy(() => import("./components/layout.js"));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route
                exact
                path="/Artistas/busqueda"
                component={PageSearchResult}
              />
              <Route exact path="/artista" component={PageArtist} />
              <Route path="/" component={PageHomeArtistas} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
