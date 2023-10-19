

const Simpson = ({simpson}) => {
    let {name, text, image} = simpson;

    return (
        <div>
            <h1>Name: {name}</h1>
            <p>{text}</p>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export {Simpson};