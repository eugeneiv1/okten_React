const baseURL = 'https://jsonplaceholder.typicode.com';

const todos = '/todos';
const albums = '/albums';
const comments = '/comments'
const urls = {
    todos,
    albums,
    comments: {
        base: comments,
        postById: (id) => `/posts/${id}`
    }
}

export {
    baseURL,
    urls
}