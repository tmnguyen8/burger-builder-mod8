import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import BackDrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxilliary/Auxilliary";

const SideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"]

    if(props.opened) {
        attachedClasses = ["SideDrawer", "Open"]
    } 

    return (
        <Aux >
            <BackDrop show={props.opened} exit={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                {/* <Logo height="11%" /> */}
                <div className="SideDrawerLogo">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
        
    )
}
export default SideDrawer;