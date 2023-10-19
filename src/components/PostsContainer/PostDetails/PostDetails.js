

const PostDetails = ({postDetails}) => {
    console.log(postDetails);
    const {userId, body} = postDetails
    return (
        <div>
            <h3>User: {userId}</h3>
            <p>{body}</p>
        </div>
    );
};

export {PostDetails};