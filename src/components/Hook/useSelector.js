import React, { Fragment } from "react";
import { useSelector } from 'react-redux'
import classes from './styleSelector.module.css'


const HookSelector = () => {
    // const uiColor = useSelector(state => state.uiColor)
    return (
        <Fragment>
            {/* css in className */}
            <div className={`${classes.container}`} >
               {/* <h1 style={{color: uiColor}}>hello nam</h1> */}
            </div>
        </Fragment>
    );
}
export default HookSelector;