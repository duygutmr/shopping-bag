import React from 'react';
import './ShoppingCart.css'
import ProductCard from './ProductCard'
import { getInLocal } from '../utils/localStorage'
import products from '../products'

class ShoppingCart extends React.Component {
    state = {
        addedProducts: []
    }

    componentDidMount() {
        const ids = getInLocal('addedProducts');
        if(!ids) return;
        let addedProducts = products.filter(product => {
            return ids.includes(product.id)
        })
        this.setState({addedProducts})
    }
  

    render () {
        return (
            <div className="ui container">
                <div className="ui cards">
                {this.state.addedProducts.map((product) => <ProductCard key={product.id} product={product} showTable={false}/>)}
                    <button className="ui button" onClick={()=> alert('Alışveriş Tamamlandı')}>Alışverişi Tamamla</button>
                </div>
    
              
            </div>
        )
    }
    
   

}

export default ShoppingCart

