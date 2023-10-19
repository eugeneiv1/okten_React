

const Character = ({character}) => {
    let {id, name, status, species, gender, image} = character;

    return (
        <div>
            <h1>{id}</h1>
            <h2>Name: {name}</h2>
            <ul>
                <li>Status: {status}</li>
                <li>Species: {species}</li>
                <li>Gender: {gender}</li>
            </ul>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export {Character};
