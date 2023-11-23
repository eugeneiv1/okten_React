import {Component} from "react";

class Comment extends Component {

    render () {
        const {postId, email, body} = this.props.comment
        return (
            <div>
                <h2>Author: {email} - post: {postId}</h2>
                <p>{body}</p>
            </div>
        )
    }
}

export {
    Comment
}