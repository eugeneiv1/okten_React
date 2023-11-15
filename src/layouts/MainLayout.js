import {Provider} from "react-redux";
import {store} from "../store/store";
import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";


const MainLayout = () => {
    return (
        <Provider store={store}>
            <Header/>
            <hr/>
            <Outlet/>
        </Provider>
    );
};

export {MainLayout};