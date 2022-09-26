import React from 'react';
import './Cart.css'

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
    console.log(cart);
    let total = 0;
    let shipping = 0;
    let tax = 0;
    for (const product of cart) {
        total += product.price;
        shipping += product.shipping;
    }
    tax = 1 * (total * 10 / 100).toFixed(2);
    let grandTotal = (total + shipping + tax).toFixed(2);
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;