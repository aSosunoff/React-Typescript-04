import { connect } from 'react-redux';
import component from './book-list';
import { RootState } from "../../reducers";
import { loadedBooks, requestBooks, errorBooks } from "../../actions/books-action";
import * as I from "./interfaces";

const mapStateToProps = ({ books }: RootState): I.StateProps => ({
    books: books.list,
    loading: books.loading,
    error: books.error,
});

export default connect(mapStateToProps, {
    loadedBooks,
    requestBooks,
    errorBooks,
})(component);