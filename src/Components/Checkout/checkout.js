import React from 'react';
import classes from './checkout.module.css';

const checkout=(props)=>{
    return(<div className={classes.mycheckoutdiv}>
        <div className={classes.mycheckoutdiv2}>
            <h3>Total</h3>
            <div className={classes.checkoutdiv3}>
                <p>Items({props.length})</p>
                <p>:   ${props.price.toFixed(2)}</p>
            </div>
            <div className={classes.checkoutdiv3}>
                <p>Discount</p>
                <p>:  -${props.discount.toFixed(2)}</p>
            </div>
            <div className={classes.checkoutdiv3}>
                <p>Type Discount</p>
                <p>:   -${props.typediscount.toFixed(2)}</p>
            </div>
        </div>
        <button><div className={classes.checkoutdiv3}>
                    <p>Order Total</p>
                    <p>${(props.price-props.discount-props.typediscount).toFixed(2)}</p>
                </div>
        </button>
    </div>)
};

export default checkout;