import React from 'react'
import './App.css'
import history from '../history'



const EmptyCart = () => {

    const goProducts = () => {
        history.push('/')
    }

    return(
        <div className="page-head" >
        <h2 className="page-title">Sepetiniz Boş</h2>
        <div>
            <button className="ui button empty" style={{margin:"30px auto", display:"block", backgroundColor:"rgb(240, 62, 62)", color:"#fff"}} onClick={goProducts}>Ürünlere dön</button>
        </div>
        </div>
    )
}


export default EmptyCart