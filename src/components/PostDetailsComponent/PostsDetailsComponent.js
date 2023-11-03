import {useNavigate} from "react-router-dom";

const PostsDetailsComponent = ({post}) => {
    const {userId, id, title, body} = post;
    const navigate = useNavigate();

    return (
        <div>
            <h2>Author id - {userId}. Post id - {id}</h2>
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={() => navigate('comments', {state: id})}>Get post comments</button>
        </div>
    );
};

export {PostsDetailsComponent};