import React from 'react';
import Proptypes from 'prop-types';
import './Item.css';

const item = ({onAddToCart}) => {
    <div className='Item'>
        <div className='Item-left'>
            <div className='Item-image'></div>
            <div className='Item-title'>
                {item.name}
            </div>
            <div className='Item-description'>
                {item.description}
            </div>
        </div>
        <div className='Item-right'>
            <div className='Item-price'>
            ${item.price}
            </div>
            <button className='Item-addToCart'>
                Add to Cart
            </button>
        </div>
    </div>

}

Item.propTypes = {
    item: propTypes.object.isRequired,
    onAddToCart: propTypes.func.isRequired 
    
};

export default Item;