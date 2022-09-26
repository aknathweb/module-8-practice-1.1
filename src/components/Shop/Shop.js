import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    // cart state set
    const [cart, setCart] = useState([]);

    // data load start 
    const [Products, setProducts] = useState([]);//empty array because we load array data

    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data));
    }, [])
    // data load end 

    //handle event by onClick function start
    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        //cart state update
        setCart(newCart);
    }
    //handle event by onClick function end

    return (
        <div className='shop-container'>
            <div className="products-container">
                {/* <h3>This is for products: {Products.length}</h3> */}
                {
                    Products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                {/* use without cart component
                 <h4>Order summary</h4>
                <p>Selected Items: {cart.length}</p> 
                */}

                {/* Cart component start */}
                <Cart cart={cart}></Cart>
                {/* Cart component end */}
            </div>
        </div>
    );
};

export default Shop;