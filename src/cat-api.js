import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_dR8QIyL3qnqSbRn5X7xzUGHW3RT6w6oo2uZF4o80kAV3CIlPDh6RuTUzeOmGYUax';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';

export function fetchBreeds() {
  return axios.get('/breeds').then(resp => resp.data);
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`/images/search?breed_ids=${breedId}`)
    .then(resp => resp.data);
}
