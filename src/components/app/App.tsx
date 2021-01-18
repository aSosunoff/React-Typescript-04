import React from "react";
import {
  BookstoreServiceProvider,
  useBookstoreServiceContext,
} from "../../context/bookstore-service-context";
import { BuildHoC } from "../../HOC/build-hoc";

const App: React.FC = () => {
  const { getBook } = useBookstoreServiceContext();
  return <div>App {getBook()}</div>;
};

export default BuildHoC(BookstoreServiceProvider, () => null)(App);
