import {useLoaderData, useLocation} from "react-router-dom";

import {UserPostsComponent} from "../components/UserPostsComponent/UserPostsComponent";
import css from './UserPostsPage.module.css'

const UserPostsPage = () => {
    const {state: id} = useLocation();
    const {data: posts} = useLoaderData();
    const userPosts = posts.filter( post => post.userId === id);

    return (
        <div className={css.wrapper}>
            {userPosts.map( post => <UserPostsComponent key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPostsPage};