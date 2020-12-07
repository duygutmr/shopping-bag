import React from 'react'



class Price extends React.Component {

    state = {
        total:0
    }

    totalPrice = () => {
        this.setState({total: this.props.product.price * this.props.count})
    }

    render() {
        return (
            <div>
                <h2>Total Price: {this.state.total}</h2>
            </div>
        )
    }
}

export default Price