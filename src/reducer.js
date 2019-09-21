
const actions = store => ({});
const apiURL = 'http://localhost:8000';
const baseURL = `${apiURL}/api/v1/movie`;

const initialState = {
  movieList: [],
};

const props = ['movieList'];

export { initialState, props, actions };
