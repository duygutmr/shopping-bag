import React from 'react'



const Button = () => {

    return(
        <div style={{margin:"20px auto"}}>
        <button className="ui button" onClick={()=> alert('Alışveriş Tamamlandı')}>Alışverişi Tamamla</button>
        </div>
    )
}


export default Button