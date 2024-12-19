import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = () => {
    const dispatch = useDispatch();
    const totalItems = useSelector((state) => state.cart.totalQuantity);

    const toggleCartHandler = () => {
        console.log('hello');
        dispatch(uiActions.toggle());
    };

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalItems}</span>
        </button>
    );
};

export default CartButton;
