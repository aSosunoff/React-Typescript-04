import React from "react";
import { useBookstoreServiceContext } from "../../context/bookstore-service-context";

const App: React.FC = () => {
  const { getBook } = useBookstoreServiceContext();
  return <div>App {getBook()}</div>;
};

export default App;
