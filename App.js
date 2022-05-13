import React, { useState } from 'react';
import Nav from './Nav';
import './App.css';
import ItemPage from './ItemPage';
import {items} from './items-data';

const App = () => {
  const [activeTab, setActiveTab] = useState(' items ');
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
  }
  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="App-content">
        <content tab={activeTab} />
        <span>Empty</span>
      </main>
    </div>
  );
};

const Content = ({tab}) => {
  switch (tab) {
    case 'items':
      return <ItemPage items={items} />;
    case 'cart':
      return <span>the cart</span>;
    default:
      break;
  }
  
}

export default App;
