import {HomePageComponent} from "../../components/HomePageComponent/HomePageComponent";
import {Outlet} from "react-router-dom";


const HomePage = () => {
    return (
        <div>
            <HomePageComponent />
            <Outlet />
        </div>
    );
};

export {HomePage};