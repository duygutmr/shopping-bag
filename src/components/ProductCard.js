import React from 'react';
import './App.css'
import './ProductCard.css'
import { setInLocal, getInLocal } from '../utils/localStorage'

class ProductCard extends React.Component {
  state = {
    isClicked: true,
    cardPrice: this.props.product.price
  }

  componentDidMount() {
    const { props } = this;
    this.setState({
      isClicked: getInLocal('addedProducts') ?
        !getInLocal('addedProducts').includes(props.product.id.toString()) :
        true
    })

    if (this.props.rerenderParentCallback) {
      props.updateProductTotal({id: props.product.id, amount: props.product.price});
    }
  }

  addToCart = () => {
    this.setState({ isClicked: !this.state.isClicked })
    let existing = getInLocal('addedProducts')
    existing = existing ? existing.split(',') : [];
    existing.push(this.props.product.id);
    setInLocal('addedProducts', existing.toString())
    if (!this.props.rerenderParentCallback) {
      this.props.incrementCount();
    }

    if (this.props.rerenderParentCallback) {
      this.props.rerenderParentCallback();
    }
  }

  removeFromCart = () => {
    this.setState({ isClicked: !this.state.isClicked })
    let existing = getInLocal('addedProducts')
    const arr = existing.split(',')
    const index = arr.indexOf(this.props.product.id.toString());
    if (index > -1) {
      arr.splice(index, 1);
    }
    setInLocal('addedProducts', arr.toString())
    if (!this.props.rerenderParentCallback) {
      this.props.decrementCount();
    }

    if (this.props.rerenderParentCallback) {
      this.props.rerenderParentCallback();
    }
  }
  onChange = (event) => {
    const { props } = this;
    const total = event.target.value * props.product.price;
    this.setState({
      cardPrice: total
    })

    if (this.props.rerenderParentCallback) {
      this.props.updateProductTotal({id: props.product.id, amount: total});
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
                </table>) :
                <div className="total">
                  <p>Miktar:</p>
                  <select className="amount" onChange={this.onChange} value={this.state.value}>
                    <option name="amount" value="1">1</option>
                    <option name="amount" value="2">2</option>
                    <option name="amount" value="3">3</option>
                    <option name="amount" value="4">4</option>
                    <option name="amount" value="5">5</option>
                  </select>
                </div>
              }

              <h3>{this.state.cardPrice} TL</h3>



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


