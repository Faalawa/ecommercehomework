import React from 'react';
import PropTypes from 'prop-types';
import './App';
import Item from './Item';


function ItemPage({items, onAddToCart}) {
    return (
        <ul className="ItemPage-items">
            {items.map(items => 
            <li key={"item.id"} className="ItemPage-items">
                {/* {items.name} */}
                <Item item={item} onAddToCart={() => onAddToCart(item)} />
            </li>)}
        </ul>
    );
}

ItemPage.PropTypes = {
    items: PropTypes.array.isRequired
};


export default ItemPage;