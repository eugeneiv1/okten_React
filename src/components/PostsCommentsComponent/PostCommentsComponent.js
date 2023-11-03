
const PostCommentsComponent = ({comment}) => {
    const {email, body} = comment

    return (
        <div>
            <h3>Comment author email - {email}</h3>
            <p>{body}</p>
        </div>
    );
};

export {PostCommentsComponent};