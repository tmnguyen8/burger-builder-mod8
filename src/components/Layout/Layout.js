import React from 'react';
import Aux from '../../hoc/Auxilliary';
import './Layout.css';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

const Layout = (props) => {
    return (
        <Aux>

            <Toolbar />
            <main className='content'>
                {props.children}
            </main>
        </Aux>
        
    )
}
export default Layout;