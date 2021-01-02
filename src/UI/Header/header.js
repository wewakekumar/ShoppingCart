import React from 'react';
import classes from './header.module.css';


const header=(props)=>{
    return( <div className={classes.upper}>
        <div>
        <p>Items({props.length})</p>
        </div>
        <div className={classes.upperright}>
          <p className={classes.mypara}>Qty</p>
          <p>Price</p>
        </div>
      </div>)
};

export default header;