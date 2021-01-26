import React from "react";
import { Route, Switch } from "react-router-dom";
import { Pages } from "../../enums/Pages";
import { CartPage, HomePage, NotFound404Page } from "../pages";
import PostPage from "../post-page";
import ShopHeader from "../shop-header";

const App: React.FC = () => {
  return (
    <main role="main" className="container">
      <ShopHeader />

      <Switch>
        <Route exact path={Pages.Home}>
          <HomePage />
        </Route>

        <Route exact path={Pages.Cart}>
          <CartPage />
        </Route>

        <Route path={Pages.Post}>
          <PostPage />
        </Route>

        <Route>
          <NotFound404Page />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
