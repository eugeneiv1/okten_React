const postsBaseURL = 'https://jsonplaceholder.typicode.com/';

const posts = '/posts';
const comments = '/comments';

const postsUrls = {
    posts,
    buId: (id) => `${posts}/${id}/${comments}`
}

export {
    postsBaseURL,
    postsUrls
}