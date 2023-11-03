import {createBrowserRouter} from "react-router-dom";

import {MainPage} from "./pages/MainPage";
import {userService} from "./services/userService";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {UserPostsPage} from "./pages/UserPostsPage";
import {postsService} from "./services/postsService";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {PostsCommentsPage} from "./pages/PostsCommentsPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
       path: 'users',
       element: <UsersPage/>,
       loader: userService.geAll,
       children: [
           {
               path: ':id',
               loader: async ({params: {id}}) => {
                  return await userService.getById(id);
               },
               element: <UserDetailsPage/>,
               children: [
                   {
                       path: 'posts',
                       loader: async () => {
                           return await postsService.getAllPosts();
                       },
                       element: <UserPostsPage />
                   }
               ]
           },
       ]
    },
    {
        path: 'posts/:id',
        loader: async ({params: {id}}) => {
            return await postsService.getById(id);
        },
        element: <PostDetailsPage />,
        children: [
            {
                path: 'comments',
                loader: async ({params:{id}}) => {
                    return await postsService.getCommentsById(id);
                },
                element: <PostsCommentsPage/>
            }
        ]
    },

])

export {
    router
}