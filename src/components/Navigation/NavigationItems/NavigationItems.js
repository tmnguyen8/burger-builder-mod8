import React from 'react';
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem"

const NavigationItems = () => {
    return (
        <ul className="NavigationItems">
            <NavigationItem 
                link={'/'}
                active={true}
            >Burder Builder</NavigationItem>
            <NavigationItem 
                link={'/'}
                active={false}
            >Checkout</NavigationItem>
        </ul>
    )
}
export default NavigationItems;