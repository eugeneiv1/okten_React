import {Posts} from "../components/PostsContainer/Posts";
import {Component} from "react";


class PostsLayout extends Component {

    render () {
        return (
            <div>
                <div>
                    <Posts/>
                </div>
            </div>
        )
    }
}


export {PostsLayout};
