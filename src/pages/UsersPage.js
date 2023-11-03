import {Outlet, useLoaderData} from "react-router-dom";

import {UsersComponent} from "../components/UsersComponent/UsersComponent";

const UsersPage = () => {
    const {data} = useLoaderData();

    return (
        <div>
            <UsersComponent users={data}/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};