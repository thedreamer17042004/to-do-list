import React, {Fragment}from "react";
import classes from './style.module.css'

const TryStyle = () => {

    return (
        <Fragment>
            <div className={classes.container}>
                <h1 className={classes.title}>hello world</h1>
                <p style={{color: 'blueviolet'}}>hello world my name is nam i am 18 years old i am single i love backend very much right</p>
                <button className={classes.btn}>Click Me</button>
            </div>
        </Fragment>
    );
}
export default TryStyle;