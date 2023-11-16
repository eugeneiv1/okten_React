

const Character = ({character}) => {
    const {id, name, image} = character
    return (
        <div>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <div>
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export {Character};