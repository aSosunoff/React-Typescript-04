import React from "react";
import { Route, Switch } from "react-router-dom";
import { Pages } from "../../enums/Pages";
import { CartPage, HomePage, NotFound404Page } from "../pages";

const App: React.FC = () => {
  return (
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
  );
};

export default App;
