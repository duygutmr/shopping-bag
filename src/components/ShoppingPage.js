import React from 'react';
import Image from '../images/hp.jpg'
import './App.css'
import './ShoppingPage.css'



const ShoppingPage = (props) => {
    console.log(props);
    return (
        <div className="ui container">
            <div>
                <h1 className="page-title">Sepetteki Ürünler</h1>
            </div>
            <div className="ui cards">
                <div className="card">
                    <img className="image" src={Image} alt="product" />
                    <div className="products-details">
                        <h2> Hp Bilgisayar</h2>
                        <p>HP Dizüstü Bilgisayar, 15.6'' FHD, Intel Core i5-10210U, 8 GB RAM, 512 GB SSD, GeForce MX110, Freedos, 1S7Y9EA
                        </p>
                    
                    <div>
                    <label htmlFor="laptop">Adet: </label>
                    <select className="amount">
                        <option name="amount" value="1">1</option>
                        <option name="amount" value="2">2</option>
                        <option name="amount" value="3">3</option>
                        <option name="amount" value="4">4</option>
                        <option name="amount" value="5">5</option>
                    </select>
                    </div>
    <h3>Fiyat:</h3>
                    <button className="ui button">Alışverişi Tamamla</button>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default ShoppingPage

