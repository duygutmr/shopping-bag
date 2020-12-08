import React from 'react';
import './ShoppingCart.css'
import './App.css'
import ProductCard from './ProductCard'
import { getInLocal } from '../utils/localStorage'
import products from '../products'
import Button from './Button'
import EmptyCart from './EmptyCart'


class ShoppingCart extends React.Component {
    state = {
        addedProducts: [],
        productTotal: []
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

    updateProductTotal = (obj) => {
        const productIdFound = this.state.productTotal.find(product => obj.id === product.id);

        if(productIdFound) {
            
            this.setState({
                productTotal: this.state.productTotal.map(product => (product.id === obj.id ? {...product, amount: obj.amount} : product))
            });

            return;
        }
        

        this.setState(prevState => ({
            productTotal: [...prevState.productTotal, obj]
        }))

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
                    : <EmptyCart />
                }
                <div className="ui cards">
                    {this.state.addedProducts.map((product) =>
                        <ProductCard key={product.id} product={product} showTable={false} rerenderParentCallback={this.rerenderParentCallback} updateProductTotal={this.updateProductTotal} />)}
                    <h2>
                        Toplam: {this.state.productTotal.reduce((a, b) => +a + b.amount, 0)} TL
                    </h2>
                    {this.state.addedProducts.length > 0 ? <Button /> : ''}

                </div>
            </div>
        )
    }
}

export default ShoppingCart

