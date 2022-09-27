// specific font awesome icon start 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// specific font awesome icon end
// import for use font awesome icon use start 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import for use font awesome icon use end
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    // const {handleAddToCart}=props;
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            {/* <h1>this is products</h1> */}
            <div className="product-info">
                {/* onError use to handle broken image  */}
                <img src={img} alt="" onError={e => { e.currentTarget.src = 'https://tinyurl.com/yk4hawcw'; }} />
                <p className='product-name'>{name}</p>
                <p>Price: {price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} Stars</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text' >Add to Cart</p>
                {/* add font awesome icon start */}
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                {/* add font awesome icon end */}
            </button>
        </div>
    );
};

export default Product;