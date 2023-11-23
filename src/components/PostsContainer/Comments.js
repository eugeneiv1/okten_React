import {Component} from "react";
import {postsService} from "../../services/postService";
import {Comment} from "./Comment";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postComments: []
        }
    }

    getPostId() {
        return window.location.pathname.split('/')[2];
    }

    goBack (e) {
        e.stopPropagation();
        window.location.replace(`/posts`);
    }

    componentDidMount() {
        const id = this.getPostId();
        postsService.commentsById(id).then(({data}) => this.setState({postComments: data}));

    }

    render () {
        return (
            <div>
                <div>
                    {this.state.postComments.map(comment => <Comment key={comment.id} comment={comment}/>)}
                </div>
                <div>
                    <button onClick={(e) => this.goBack(e)}>Go Back to posts</button>
                </div>
            </div>
        )
    }
}

export {
    Comments
}