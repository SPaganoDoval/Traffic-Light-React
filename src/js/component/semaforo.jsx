import React from "react";
import propTypes from "prop-types";


const Semaforo = (props) =>{

    return (
        <div onClick={props.turnOn} className={props.extraClass}></div>
       
    );
};

Semaforo.propTypes = {
    turnOn: propTypes.func,
    extraClass:propTypes.string
}

export default Semaforo;
