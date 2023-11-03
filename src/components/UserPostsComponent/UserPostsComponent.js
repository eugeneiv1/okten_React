import {useNavigate} from "react-router-dom";

import css from './UserPostsComponent.module.css';

const UserPostsComponent = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();

    return (
        <div className={css.userPost_wrapper}>
            <h3>Post id - {id}</h3>
            <p>{title}</p>
            <button onClick={() => navigate(`/posts/${id}`, {state: id})}>Post Details</button>
        </div>
    );
};

export {UserPostsComponent};