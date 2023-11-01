

const Car = ({car}) => {

    const {id, brand, price, year} = car

    return (
        <div>
            <h1>ID: {id}</h1>
            <h2>Brand: {brand}</h2>
            <p>Price: {price}</p>
            <p>Manuf year: {year}</p>
        </div>
    );
};

export {Car};