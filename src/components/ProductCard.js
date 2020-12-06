import React from 'react';
import './App.css'
import { setInLocal, getInLocal } from '../utils/localStorage'

  class ProductCard extends React.Component {
    state = {
        isClicked: true,
      }

      componentDidMount() {
        this.setState({isClicked: getInLocal('addedProducts') ? 
          !getInLocal('addedProducts').includes(this.props.product.id.toString()) : 
          true})
      }
    
      addToCart = () => {
        this.setState({isClicked: !this.state.isClicked})
        let existing = getInLocal('addedProducts')
        existing = existing ? existing.split(',') : [];
        existing.push(this.props.product.id);
        setInLocal('addedProducts', existing.toString())
        if(!this.props.rerenderParentCallback) {
          this.props.incrementCount();
        }
        
        if(this.props.rerenderParentCallback) {
          this.props.rerenderParentCallback();
        }
      }

      removeFromCart = () => {
        this.setState({isClicked: !this.state.isClicked})
        let existing = getInLocal('addedProducts')
        const arr = existing.split(',')
        const index = arr.indexOf(this.props.product.id.toString());
        if (index > -1) {
          arr.splice(index, 1);
        }
        setInLocal('addedProducts', arr.toString())
        if(!this.props.rerenderParentCallback) {
          this.props.decrementCount();
        }
        
        if(this.props.rerenderParentCallback) {
          this.props.rerenderParentCallback();
        }
      }


     
    render() {
        return (
          <div className="ui container">
            <div className="ui cards">
                <div className="card">
                  <img className="image" src={this.props.product.image} alt="product" />
                  <div className="products-details">
                    <h1>{this.props.product.title}</h1>
                    <p>{this.props.product.description}</p>

                    {this.props.showTable ? 
                    (<table className="ui fixed single line celled table">
                    <tbody>
                      <tr>
                        <td>Seri</td>
                        <td>Laptop 15-da2088nt</td>
                      </tr>
                      <tr>
                        <td>Ekran</td>
                        <td>15.6</td>
                      </tr>
                      <tr>
                        <td>Ram Boyutu</td>
                        <td>512</td>
                      </tr>
                      <tr>
                        <td>İşlemci Sayısı</td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td>İşetim Sistemi</td>
                        <td>FreeDOS</td>
                      </tr>
                    </tbody>
                  </table>) : null}

              <h3>{this.props.product.price}</h3>
    
    
                    {this.state.isClicked ?
                      <button className="ui button" onClick={this.addToCart}> Sepete Ekle </button>
                      :
                      <button className="ui button" onClick={this.removeFromCart} >Sepetten Çıkar</button>
                    }
                  </div>
    
                </div>
            </div>
          </div>
        );
      }
  }

  export default ProductCard


