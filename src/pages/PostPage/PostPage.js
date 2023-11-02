import {useLocation} from "react-router-dom";

import {PostComponent} from "../../components/PostComponent/PostComponent";


const PostPage = () => {
    const {state: postId} = useLocation();

    return (
        <div>
            <PostComponent postId={postId}/>
        </div>
    );
};

export {PostPage};