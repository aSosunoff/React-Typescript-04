import { connect } from 'react-redux';
import component from './book-list';
import { RootState } from "../../reducers";
import { load, request } from "../../actions/books-action";
import * as I from "./interfaces";

const mapStateToProps = ({ books }: RootState): I.StateProps => ({
    books: books.list,
    loading: books.loading,
});

export default connect(mapStateToProps, {
    load,
    request,
})(component);