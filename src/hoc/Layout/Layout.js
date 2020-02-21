import React, { Component } from 'react';
import Aux from '../Auxilliary/Auxilliary';
import './Layout.css';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((preState) => {
            return {showSideDrawer: !preState.showSideDrawer}
        })
    }


    render () {
        return (
        <Aux>

            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer 
                opened={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler}
            />
            <main className='content'>
                {this.props.children}
            </main>
        </Aux>
        
        )
    }
    
}
export default Layout;