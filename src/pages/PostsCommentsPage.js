import {useLoaderData} from "react-router-dom";

import {PostCommentsComponent} from "../components/PostsCommentsComponent/PostCommentsComponent";

const PostsCommentsPage = () => {
    const {data:comments} = useLoaderData();

    return (
        <div>
            {comments.map( comment => <PostCommentsComponent comment={comment} key={comment.id}/>)}
        </div>
    );
};

export {PostsCommentsPage};