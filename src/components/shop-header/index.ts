import { RootState } from "../../redux/reducers";
import { connect } from 'react-redux';
import * as I from "./interfaces";
import component from './shop-header';

const mapStateToProps = ({ cart }: RootState): I.StateProps => ({
    total: cart.list.reduce((res, item) => res + item.total, 0),
    numItems: cart.list.length,
});

export default connect(mapStateToProps)(component);