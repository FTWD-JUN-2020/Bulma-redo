import React from 'react';

const CoolButton = (props) => {
    return (
    <button className={props.classes}>{props.name}</button>
    );
};

export default CoolButton;