import {useEffect, useState} from "react";
import {commonService} from "../../services/commonService";


const PostComponent = ({postId}) => {
    const [post, setPost] = useState({});

    useEffect(() => {
        commonService.getPostById(postId).then(({data}) => setPost(data))
    }, [postId])
    return (
        <div>
            <h2>Author id: {post.userId}</h2>
            <p>Post id: {post.id} - {post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export {PostComponent};