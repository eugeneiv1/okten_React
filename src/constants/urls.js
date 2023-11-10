const baseURL = 'https://rickandmortyapi.com/api';

const episodes = '/episode';
const characters = '/character';

const urls = {
    episodes,
    charactersById: (id) => `${characters}/${id}`,
}

export {
    baseURL,
    urls
}