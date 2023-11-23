import {createBrowserRouter} from "react-router-dom";

import {PostsLayout} from "./layouts/PostsLayout";
import {MainLayout} from "./layouts/MainLayout";
import {CarsLayout} from "./layouts/CarsLayout";
import {Comments} from "./components/PostsContainer/Comments";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                path: '/posts', element: <PostsLayout/>
            },
            {
                path: '/cars', element: <CarsLayout/>
            },
            {
                path: 'posts/:id/comments', element: <Comments/>
            }
        ]
    }
])

export {
    router
}