const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts'

const urls = {
    users,
    posts,
    userById: (id) => `${users}/${id}`,
    postById: (id) => `${posts}/${id}`,
    commentsById: (id) => `${posts}/${id}/comments`
}

export {
    baseURL,
    urls
}