import React from 'react';
import { 
    button,
    div
} from '../../scss/5-components/burger.module.scss';

const Burger = () => {
    return (
        <button className={button}>
            <div className={div}/>
            <div className={div}/>
            <div className={div}/>
        </button>
    )
}

export default Burger;