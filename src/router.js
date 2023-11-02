import {createBrowserRouter} from "react-router-dom";

import {HomePage} from "./pages/HomePage/HomePage";
import {TodosPage} from "./pages/TodosPage/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage/CommentsPage";
import {PostPage} from "./pages/PostPage/PostPage";
import {ErrorPage} from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,

        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'todos',
                element: <TodosPage/>
            },
            {
                path: 'albums',
                element: <AlbumsPage/>
            },
            {
                path: 'comments',
                element: <CommentsPage />
            },
            {
                path: 'post',
                element: <PostPage/>
            }
        ]
    }
])

export {
    router
}