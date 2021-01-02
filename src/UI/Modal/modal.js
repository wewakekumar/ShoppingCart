import React from 'react';
import classes from './modal.module.css'
import Backdrop from '../Backdrop/backdrop';

const modal=(props)=>
(
    <div>
    <Backdrop show={props.show} clicked={props.modelClosed}></Backdrop>
    <div className={classes.Modal}
    style={{
        transform:props.show? 'translateY(0)':'translateY(-100vh)',
        opacity:props.show?'1':'0'
    }}
    >
        {props.children}
    </div>
    </div>
);

export default modal;