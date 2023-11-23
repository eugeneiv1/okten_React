import {Component} from "react";
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

class Header extends Component {
    render () {
        return  (
            <div className={css.Header_container}>
                <NavLink to={'/posts'}>Show Posts</NavLink>
                <NavLink to={'/cars'}>ShowCars</NavLink>
            </div>
        )
    }
}

export {
    Header
}