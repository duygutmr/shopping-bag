import React from 'react';

import './App.css'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"
import history from '../history'
import ShoppingIcon from '../svgs/shopping-cart.svg'
import ProductCard from './ProductCard'
import products from '../products'
import { getInLocal } from '../utils/localStorage'

class App extends React.Component {
  state = {
    count: 0
  }

  componentDidMount() {
    this.setState({count: getInLocal('addedProducts') ? getInLocal('addedProducts').split(',').length : 0})
  }

  goShoppingCart = () => {
    history.push('/sepetim')
  }

  incrementCount = () => {
    this.setState({count: this.state.count + 1})
  }

  decrementCount = () => {
    this.setState({count: this.state.count - 1})
  }


  render() {
    return (
     <div className="ui container">
       <div className="page-head">
              <h1 className="page-title">Ürünler</h1>
              <Router>
                <Link to='/sepetim'>
                  <img className="shopping-icon" src={ShoppingIcon} alt="icon of shopping cart"
                    onClick={this.goShoppingCart} />
                  <p className="shopping-icon counter" onClick={this.goShoppingCart}>{this.state.count}</p>
                </Link>
              </Router>
            </div>
      {products.map((product) => <ProductCard key={product.id} showTable product={product} incrementCount={this.incrementCount} decrementCount={this.decrementCount} />)}
     </div>
    )        
  }
}

export default App;
