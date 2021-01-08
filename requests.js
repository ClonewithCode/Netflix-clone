const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";


const requests = {
  fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en=us`,
  fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en=us`,
  fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_generes=28`,
  fetch
}

export default requests;