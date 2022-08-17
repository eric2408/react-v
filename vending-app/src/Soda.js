import React from 'react';
import { NavLink } from 'react-router-dom';
import Message from './Message';
import sodaImage from './Soda.png';
import './Soda.css';

const Soda = () => {
    return (
        <div className="Soda">
          <img src={sodaImage} alt="coca cola can" />
          <Message>
            <h1>OMG SUGARRRRR</h1>
            <h1><NavLink to="/">go back</NavLink></h1>
          </Message>
          <img src={sodaImage} alt="coca cola can" />
        </div>
      );
}

export default Soda;