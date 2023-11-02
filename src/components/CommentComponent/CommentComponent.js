import {useNavigate} from "react-router-dom";

import css from './CommentComponent.module.css'


const CommentComponent = ({comment}) => {
    const {postId, name, email, body} = comment

    const navigate = useNavigate()

    return (
        <div onClick={() => navigate('/post', {state:postId})} className={css.Comment_container}>
            <h3>Comment name: {name}</h3>
            <p>Contact author: {email}</p>
            <p>{body}</p>

        </div>
    );
};

export {CommentComponent};