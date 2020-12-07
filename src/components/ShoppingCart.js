import React from 'react';
import './ShoppingCart.css'
import './App.css'
import ProductCard from './ProductCard'
import { getInLocal } from '../utils/localStorage'
import products from '../products'
import Button from './Button'
import EmptyCart from './EmptyCart';
import Price from './Price'

class ShoppingCart extends React.Component {
    state = {
        addedProducts: []
    }

    componentDidMount() {
        this.setState({ addedProducts: this.getSavedProducts() })
    }


    getSavedProducts = () => {
        const ids = getInLocal('addedProducts');
        if (!ids) return [];
        return products.filter(product => {
            return ids.includes(product.id)
        })
    }

    rerenderParentCallback = () => {
        this.setState({ addedProducts: this.getSavedProducts() || [] })
    }

  


    render() {
        return (
            <div className="ui container">
                {this.state.addedProducts.length > 0 ?
                <div className="page-head">
                    <h1 className="page-title">Sepetteki Ürünler</h1>
                </div>
                : <EmptyCart/>
    }
                <div className="ui cards">
                    {this.state.addedProducts.map((product) => 
                    <ProductCard key={product.id} product={product} showTable={false} rerenderParentCallback={this.rerenderParentCallback} />)}
                    <Price />
                   
                    {this.state.addedProducts.length > 0 ? <Button /> : ''}
                   
                </div>
            </div>
        )
    }
}

export default ShoppingCart

