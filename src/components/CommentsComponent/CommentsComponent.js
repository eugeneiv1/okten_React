import {useEffect, useState} from "react";

import {commonService} from "../../services/commonService";
import {CommentComponent} from "../CommentComponent/CommentComponent";



const CommentsComponent = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commonService.getComments().then(({data}) => setComments(data))
    }, [])
    return (
        <div>
            {comments.map( comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsComponent};