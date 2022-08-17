import React, {useState} from 'react';
import chipsImg from "./Chips.png";
import { NavLink } from "react-router-dom";
import Message from "./Message";
import "./Chips.css";

const Chips = () => {
    const [bags, setBags] = useState([]);

    const handleClick = () => {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        setBags(oldBags => [...oldBags, { x, y }]);
    }


    return (
        <div className="Chips">
          <Message>
            <h1>bags eaten: {bags.length}</h1>
            <button onClick={handleClick}>nom nom nom</button>
            <h1>
              <NavLink to="/">go back</NavLink>
            </h1>
          </Message>
          {bags.map((bag, i) => {
            return (<img
                key={i}
                src={chipsImg}
                className="bag"
                style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
                alt="bag of lay's chips"
            />)
          })}
        </div>
      );
}

export default Chips;