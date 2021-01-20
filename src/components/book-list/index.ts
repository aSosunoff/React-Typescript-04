import { connect } from 'react-redux';
import component from './book-list';
import { RootState } from "../../redux/reducers";
import { fetchBooks } from "../../redux/actions/books-action";
import * as I from "./interfaces";
import { Dispatch } from 'redux';
import { withBookstoreService, withBookstoreServiceProps } from '../../HOC/with-bookstore-service';
import { Compose } from '../../utils/Compose';
import { onAddedToCart } from '../../redux/actions/cart-action';

const mapStateToProps = ({ books }: RootState): I.StateProps => ({
    books: books.list,
    loading: books.loading,
    error: books.error,
});

const mapDispatchToProps = (dispatch: Dispatch, { getBook }: withBookstoreServiceProps) => ({
    fetchBooks: fetchBooks(getBook, dispatch),
    onAddedToCart: (id: number) => dispatch(onAddedToCart(id)),
});

export default Compose<React.FC>(
    withBookstoreService,
    connect(mapStateToProps, mapDispatchToProps)
)(component);