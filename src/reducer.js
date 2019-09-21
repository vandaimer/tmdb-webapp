import axios from 'axios';

const actions = store => ({});
const apiURL = 'http://localhost:8000';
const baseURL = `${apiURL}/api/v1/movie`;

const initialState = {
  movieList: [],
};

const getUpcomingMovies = async state => {
  const uri = `${baseURL}/upcoming`;

  try {
    const {
      data: { items: movieList },
    } = await axios.get(uri);

    return { movieList };
  } catch (e) {
    const { movieList } = state;
    return { movieList };
  }
};

const props = ['movieList'];

export { initialState, props, actions };
