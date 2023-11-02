

const AlbumComponent = ({album}) => {
    const {userId, id, title} = album;
    return (
        <div>
            <h2>Author id: {userId}</h2>
            <p>Album id: {id}</p>
            <p>{title}</p>
        </div>
    );
};

export {AlbumComponent};