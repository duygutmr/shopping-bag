import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import Image from '../images/hp.jpg'
import ShoppingIcon from '../svgs/shopping-cart.svg'
import ShoppingPage from './ShoppingPage';


class App extends React.Component {

  state = {
    count: 0,
    isClicked: true,
  }



  addToCart = () => {
    this.setState({
      count: this.state.count + 1,
      isClicked: !this.state.isClicked
    })
  }
  removeFromCart = () => {
    this.setState({
      count: this.state.count - 1,
      isClicked: !this.state.isClicked
    })
  }
  goShoppingCart = () => {
    console.log('gidildi');

  }

  render() {
    const pricing = 6000;
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

        <div className="ui cards">
          <div className="card">
            <img className="image" src={Image} alt="product" />
            <div className="products-details">
              <h2> Hp Bilgisayar</h2>
              <p>HP Dizüstü Bilgisayar, 15.6'' FHD, Intel Core i5-10210U, 8 GB RAM, 512 GB SSD, GeForce MX110, Freedos, 1S7Y9EA
            </p>
              <table class="ui fixed single line celled table">
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
              </table>
              <h3>6000 TL</h3>

              {this.state.isClicked ?
                <button className="ui button" onClick={this.addToCart}> Sepete Ekle </button>
                :
                <button className="ui button" onClick={this.removeFromCart} >Sepetten Çıkar</button>
              }
            </div>

          </div>

        </div>
        <ShoppingPage />
      </div>
    );
  }
}

export default App;
