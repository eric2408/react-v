import React from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message';
import './Home.css';
import vendingMachine from './VendingMachine.png';

const Home = () => {
return (
    <div 
        className='VendingMachine'
        style={{ backgroundImage: `url(${vendingMachine})`}}>
        <Message>
            <h1>Hello I am Vending Machine. What would you like to eat?</h1>
        </Message>
        <Message>
            <h1><NavLink exact to ='/chips'>chips</NavLink></h1>
            <h1><NavLink exact to ='/soda'>soda</NavLink></h1>
            <h1><NavLink exact to ='/sardines'>Sardines</NavLink></h1>
        </Message>
    </div>

)
}

export default Home;