import {Component} from "react";

class Car extends Component {
    render () {
        const {brand, price, year} = this.props.car;

        return (
            <div>
                <h3>{brand} - price: {price}</h3>
                <p>Manufacture year - {year}</p>
            </div>
        )
    }
}

export {
    Car
}