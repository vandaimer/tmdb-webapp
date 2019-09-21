import axios from 'axios';

const apiURL = 'http://localhost:8000';
const baseURL = `${apiURL}/api/v1/movie`;

const initialState = {
  movieList: [],
  totalResults: 0,
};

const getUpcomingMovies = async state => {
  const uri = `${baseURL}/upcoming`;

  try {
    const {
      data: { items: movieList, total_results: totalResults },
    } = await axios.get(uri);

    return { movieList, totalResults };
  } catch (e) {
    const { movieList, totalResults } = state;
    return { movieList, totalResults };
  }
};

const actions = store => ({
  getUpcomingMovies: state => getUpcomingMovies(state),
});

const props = ['movieList', 'totalResults'];

export { initialState, props, actions };
