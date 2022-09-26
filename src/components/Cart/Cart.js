import React from 'react';

/* normal way
 const Cart = (props) => {
    return (
        <div>
            <h4>Order summary</h4>
            <p>Selected Items: {props.cart.length}</p>
        </div>
    );
}; */

// porps use destructuring way
const Cart = ({ cart }) => {
    return (
        <div>
            <h4>Order summary</h4>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;