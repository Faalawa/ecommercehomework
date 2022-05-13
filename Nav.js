import React from 'react';

const Nav = ({activeTab, onTabChange}) => {
    const itemClass = (tabName) =>` 
        App-nav-item ${activeTab === tabName ? 'selected' :  ''}`;
    
    return (
        <nav className="App-nav">
            <ul>
                <li className="App-nav-item">
                    <button onClick={() => onTabChange ( 'item' )}>Items</button>
                </li>
                <li className="App-nav-item">
                    <button onClick={() => onTabChange( 'cart' )}>Cart</button>
                </li>
            </ul>
        </nav>
    )
};





export default Nav;