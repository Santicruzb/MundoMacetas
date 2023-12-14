import React from "react";
import "./ItemCountModule.css";
import {useState} from "react"

const ItemCount = ({initial = 1, stock = 10, onAdd }) => {
    const [count, setCount] = useState (initial)

    const increment = () => {
        if(count>stock){
            setCount(prev => prev + 1)
        }
    }

    const decrement = () => {
        if(count>1){
            setCount(prev => prev - 1)
        }
    }

    return (
        <div className="item-count-container">
            <h6>0</h6>
            <div className="position">
            <button className="count-button" onClick={decrement}>-</button>
            <button className="add-to-cart-button" onClick={() => onAdd(count)}>Agregar</button>
            <button className="count-button" onClick={increment}>+</button>
            </div>
        </div>
    );
};

export default ItemCount;


