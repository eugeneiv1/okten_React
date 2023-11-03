import {Link} from "react-router-dom";

import css from './MainPageComponent.module.css'

const MainPageComponent = () => {
    return (
        <div className={css.MainPageComponent_wrapper}>
            <Link to='users'>Show all users</Link>
        </div>
    );
};

export {MainPageComponent};