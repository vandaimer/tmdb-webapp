import axios from 'axios';

const apiURL = 'http://localhost:8000';
const baseURL = `${apiURL}/api/v1/movie`;

const initialState = {
  movieList: [],
  totalResults: 0,
  page: 1,
};

const getUpcomingMovies = async (state, nextPage=1) => {
  const uri = `${baseURL}/upcoming`;

  try {
    const {
      data: { items: movieList, total_results: totalResults, page },
    } = await axios.get(uri, { params: { page: nextPage } });

    return { movieList, totalResults, page: page };
  } catch (e) {
    const { movieList, totalResults, page } = state;
    return { movieList, totalResults, page };
  }
};

const actions = store => ({
  getUpcomingMovies: (state, page) => getUpcomingMovies(state, page),
});

const props = ['movieList', 'totalResults', 'page'];

export { initialState, props, actions };
