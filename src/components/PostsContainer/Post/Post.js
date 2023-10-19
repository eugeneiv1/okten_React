import css from './Post.module.css'
import {PostDetails} from "../PostDetails/PostDetails";
import {useState} from "react";

const Post = ({post}) => {
    const {id, title, userId, body} = post;

    const [postDetails, setPostDetails] = useState(null)

    const click = (userId, body) => {
        const postDetails = {userId, body};
        setPostDetails(postDetails);
    }

    return (
        <div className={css.PostWrapper}>
            <div className={css.Post} id={id}>
                <h1>Post id:{id}</h1>
                <h2>Post title: {title}</h2>
                <button onClick={() => click(userId, body)}>Details</button>

            </div>
            {
                postDetails && <PostDetails postDetails={postDetails}/>
            }
        </div>
    );
};

export {Post};