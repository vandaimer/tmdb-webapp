import axios from 'axios';

const apiURL = 'http://localhost:8000';
const baseURL = `${apiURL}/api/v1/movie`;

const initialState = {
  isSearching: false,
  searchList: [],
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

const setIsSearching = (state, isSearching) => {
  return { isSearching: isSearching };
}

const search = (state, word) => {
  const { movieList } = state;

  if(word === '') {
    return { searchList: [], isSearching: false };
  }

  const searchList = movieList.filter(({ title }) => title.includes(word));

  return { searchList, isSearching: true };
};

const actions = store => ({
  getUpcomingMovies: (state, page) => getUpcomingMovies(state, page),
  setIsSearching: (state, isSearching) => setIsSearching(state, isSearching),
  search: (state, page) => search(state, page),
});

const props = ['movieList', 'totalResults', 'page', 'isSearching', 'searchList'];

export { initialState, props, actions };
