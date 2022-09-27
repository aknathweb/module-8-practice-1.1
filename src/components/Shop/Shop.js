import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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

    //side effect: collect data from local storage
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        // console.log(storedCart);
        for (const id in storedCart) {
            // console.log(id);
            const addedProduct = Products.find(product => product.id === id)
            // console.log(addedProduct);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
        ///[Products] dependency base on product change
    }, [Products]);

    //handle event by onClick function start
    const handleAddToCart = (selectedproduct) => {
        // console.log(product);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedproduct.id)
        if (!exists) {
            selectedproduct.quantity = 1;
            newCart = [...cart, selectedproduct];
        }
        else {
            const rest = cart.filter(product => product.id != selectedproduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        //cart state update
        setCart(newCart);
        //add in local storage with id
        addToDb(selectedproduct.id)
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