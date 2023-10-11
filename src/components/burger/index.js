import React from 'react';
import { bool, func } from 'prop-types';
import { 
    button,
    div
} from '../../scss/5-components/burger.module.scss';

const Burger = ({ open, setOpen }) => {
    return (
        <button className={button} open={open} onClick={() => setOpen(!open)}>
            <div className={div}/>
            <div className={div}/>
            <div className={div}/>
        </button>
    )
}
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};
export default Burger;