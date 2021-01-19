import React from "react";
import { Route, Switch } from "react-router-dom";
import { Pages } from "../../enums/Pages";
import { CartPage, HomePage, NotFound404Page } from "../pages";
import ShopHeader from "../shop-header";

const App: React.FC = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={1} total={123} />
      
      <Switch>
        <Route exact path={Pages.Home}>
          <HomePage />
        </Route>

        <Route exact path={Pages.Cart}>
          <CartPage />
        </Route>

        <Route>
          <NotFound404Page />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
