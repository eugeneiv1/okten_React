import {useNavigate} from "react-router-dom";

import css from './UserComponent.module.css'

const UserComponent = ({user}) => {
    const {id, name} = user;
    const navigate = useNavigate();

    return (
        <div className={css.UserComponent_wrapper}>
            <h2>{id} - {name}</h2>
            <button onClick={() => navigate(`${id}`, {state: id})}>Show user details</button>
        </div>
    );
};

export {UserComponent};