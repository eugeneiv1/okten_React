
import {useEffect, useState} from "react";

import {postService} from "../../../services/postService";
import {Post} from "../Post/Post";

import css from './Posts.module.css'


const Posts = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        postService.getAll().then(({data})=> setPosts(data));
    }, []);


    return (
        <div>
            <div className={css.Posts}>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>

        </div>
    );
};

export {Posts};