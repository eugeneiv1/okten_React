
const CharacterComponent = ({character}) => {
    const {id, name, image} = character
    return (
        <div>
            <h4>Name: {name}, id: {id}</h4>
            <img src={image} alt=""/>
        </div>
    );
};

export {CharacterComponent};