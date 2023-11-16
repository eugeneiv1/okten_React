import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {Episodes} from "./components/episodesContainer/Episodes";
import {CharactersPage} from "./pages/CharactersPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout />, children: [
            {
                index: true, element: <Navigate to={'episode'} />
            },
            {
                path: 'episode', element: <Episodes/>
            },
            {
                path: '/characters/:charactersIds', element: <CharactersPage/>
            }
        ]
    }
])

export {router}