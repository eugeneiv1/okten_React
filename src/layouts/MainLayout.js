import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};