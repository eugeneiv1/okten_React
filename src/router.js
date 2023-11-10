import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {EpisodesPage} from "./pages/episodes/EpisodesPage";
import {CharactersPage} from "./pages/charcters/CharactersPage";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to='/episodes'/>

            },
            {
                path: '/episodes',
                element: <EpisodesPage />
            },
            {
                path: '/characters/:idsList',
                element: <CharactersPage />
            }
        ]
    }
]);

export {router}