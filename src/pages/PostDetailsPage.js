import {Outlet, useLoaderData} from "react-router-dom";

import {PostsDetailsComponent} from "../components/PostDetailsComponent/PostsDetailsComponent";

const PostDetailsPage = () => {
    const {data} = useLoaderData();

    return (
        <div>
            <PostsDetailsComponent post={data}/>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};