import {Component} from "react";

class Post extends Component {
    showPostComments (id, e) {
        e.stopPropagation();
        window.location.replace(`posts/${id}/comments`);
    }


    render () {
        const {id, userId, title, body} = this.props.post;
        return (
            <div onClick={(e) => this.showPostComments(id, e)}>
                <h2>User: {userId} - post: {id}</h2>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        )
    }

}

export {
    Post
}
