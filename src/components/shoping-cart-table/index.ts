import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import component from './shoping-cart-table';
import * as I from './interfaces';
import { cart } from '../../actions/cart-action';

const mapStateToProps = ({ cart }: RootState): I.StateProps => ({
    carts: cart.list,
});

export default connect(mapStateToProps, {
    cart
})(component);
