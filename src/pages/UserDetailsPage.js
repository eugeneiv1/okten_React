import {Outlet, useLoaderData} from "react-router-dom";

import {UserDetailsComponent} from "../components/UserDetailsComponent/UserDetailsComponent";


const UserDetailsPage = () => {
    const {data:user} = useLoaderData();

    return (
        <div>
            <UserDetailsComponent user={user}/>
            <hr/>
            <Outlet />

        </div>
    );
};

export {UserDetailsPage};