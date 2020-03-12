import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/action';

import Aux from '../../hoc/Auxilliary/Auxilliary';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from '../../axios-orders';
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import keys from "../../keys/keys";


class BurgerBuilder extends Component {
    state = {
        // ingredients: null,
        // totalPrice: 4,
        // purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }
    componentDidMount () {
        // console.log(keys.FIREBASE_INGREDIENTS_BASEURL)
        // axios.get(keys.FIREBASE_INGREDIENTS_BASEURL)
        //     .then(response => {
        //         console.log(response)
        //         this.setState({ingredients: response.data})
        //     })
        //     .catch(error => {
        //         this.setState({error: true})
        //     })
    }

    updatePurchaseState = (ingredients) => {
        
        const sum = Object
            .keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            },0);
        // this.setState({purchasable: sum > 0});
        return sum > 0
    }



    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }
    purchaseContinueHandler = () => {
        console.log(this.props)
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let myOrderSummary = null;
        if (this.props.ings) {
            myOrderSummary = (
                <OrderSummary 
                    ingredients={this.props.ings}
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    price={this.props.price}
                />
            )
        }

        // Check if loading otherwise display spinner
        if (this.state.loading){
            myOrderSummary = <Spinner />
        }

        let burger = this.state.error ? <p>Ingredients cannot be loaded</p> : <Spinner />
        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger 
                        ingredients={this.props.ings}
                    />
                    <BuildControls 
                        ingredientAdded = {this.props.onIngredientAdded}
                        ingredientRemoved = {this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        price = {this.props.price}
                        purchasable = {this.updatePurchaseState(this.props.ings)}
                        ordered = {this.purchaseHandler}
                    />
                </Aux>
            )
        }
        return (
            <Aux>
                <Modal 
                    show={this.state.purchasing} 
                    modalClosed={this.purchaseCancelHandler}
                >
                    {myOrderSummary}
                </Modal>
                {burger}
                
            </Aux>
        )
    }
}
const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));