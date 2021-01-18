import React, { createContext, useContext, useMemo } from "react";
import {
  BookstoreServices,
  IBookstoreServices,
} from "../services/bookstore-service";

interface BookstoreServiceContextProps extends IBookstoreServices {}

const BookstoreServiceContext = createContext<BookstoreServiceContextProps>(
  {} as BookstoreServiceContextProps
);

BookstoreServiceContext.displayName = "BookstoreServiceContext";

export const useBookstoreServiceContext = () =>
  useContext(BookstoreServiceContext);

export const BookstoreServiceProvider: React.FC = ({ children }) => {
  const BookstoreServicesInstance = useMemo(() => new BookstoreServices(), []);

  return (
    <BookstoreServiceContext.Provider value={BookstoreServicesInstance}>
      {children}
    </BookstoreServiceContext.Provider>
  );
};
