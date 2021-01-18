import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import store from "./store";
import { BookstoreServiceProvider } from "./context/bookstore-service-context";
import ErrorBoundaryIndicator from "./components/error-boundary-indicator";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundaryIndicator>
      <BookstoreServiceProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookstoreServiceProvider>
    </ErrorBoundaryIndicator>
  </Provider>,
  document.getElementById("root")
);
