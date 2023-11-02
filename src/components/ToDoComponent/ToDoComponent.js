

const ToDoComponent = ({item}) => {
    const {userId, id, title, completed} = item
    return (
        <div>
            <h2>Id of user: {userId}</h2>
            <p>To Do item id: {id}</p>
            <p>{title} - is completed {completed}</p>
        </div>
    );
};

export {ToDoComponent};