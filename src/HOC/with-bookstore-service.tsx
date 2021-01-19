import { useBookstoreServiceContext } from "../context/bookstore-service-context";
import { IBook } from "../interfaces/IBook";

export interface withBookstoreServiceProps {
  getBook: () => Promise<IBook[]>;
}

export function withBookstoreService<TChildProps>(
  WrapperComponent: React.ComponentType<TChildProps>
): React.FC<withBookstoreServiceProps & TChildProps> {
  return (props: TChildProps) => {
    const { getBook } = useBookstoreServiceContext();

    return <WrapperComponent {...props} getBook={getBook} />;
  };
}
