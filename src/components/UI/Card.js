import React from 'react';
import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
};



// Same to the previous one

// function Card(props) {
//     const classes = 'card ' + props.className;
//     return <div className={classes}>{props.children}</div>;
// }

export default Card;