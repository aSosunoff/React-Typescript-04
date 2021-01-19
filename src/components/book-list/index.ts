import { connect } from 'react-redux';
import component from './book-list';
import { RootState } from "../../reducers";
import { fetchBooks } from "../../actions/books-action";
import * as I from "./interfaces";
import { Dispatch } from 'redux';
import { withBookstoreService, withBookstoreServiceProps } from '../../HOC/with-bookstore-service';
import { Compose } from '../../utils/Compose';

const mapStateToProps = ({ books }: RootState): I.StateProps => ({
    books: books.list,
    loading: books.loading,
    error: books.error,
});

const mapDispatchToProps = (dispatch: Dispatch, { getBook }: withBookstoreServiceProps) => ({
    fetchBooks: fetchBooks(getBook, dispatch),
});

export default Compose<React.FC<Pick<I.OwnProps, 'onAddedToCart'>>>(
    withBookstoreService,
    connect(mapStateToProps, mapDispatchToProps)
)(component);

/* export default connect(mapStateToProps, {
    fetchBooks,
})(component); */

/* const mapDispatchToProps = (dispatch: Dispatch, { getBook }: withBookstoreServiceProps) => {
    return {
        fetchBooks: () => {
            dispatch(requestBooks());

            getBook()
                .then((date) => dispatch(loadedBooks(date)))
                .catch((er) => dispatch(errorBooks(er.message)));
        },
    }
};

export default Compose<React.FC<I.OwnProps>>(
    withBookstoreService,
    connect(mapStateToProps, mapDispatchToProps)
)(component); */