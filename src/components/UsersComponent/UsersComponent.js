import {UserComponent} from "../UserComponent/UserComponent";

import css from './UsersComponent.module.css'

const UsersComponent = ({users}) => {
    return (
        <div className={css.UsersComponent_wrapper}>
            {users.map( user => <UserComponent user={user} key={user.id} />)}
        </div>
    );
};

export {UsersComponent};