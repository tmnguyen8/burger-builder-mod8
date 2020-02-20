import React from 'react';
import "./Backdrop.css";

 const Backdrop = (props) => {
    if (props.show) {
        return <div className="Backdrop" onClick={props.exit}></div>;
    } else {
        return null;
    }
}
export default Backdrop;