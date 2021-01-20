import { connect } from 'react-redux';
import { RootState } from '../../redux/reducers';
import component from './shoping-cart-table';
import * as I from './interfaces';
import { cart, onDecrease, onDelete, onIncrease } from '../../redux/actions/cart-action';

const mapStateToProps = ({ cart }: RootState): I.StateProps => ({
    carts: cart.list,
});

export default connect(mapStateToProps, {
    cart,
    onDecrease,
    onDelete,
    onIncrease
})(component);
