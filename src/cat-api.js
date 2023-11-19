import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_dR8QIyL3qnqSbRn5X7xzUGHW3RT6w6oo2uZF4o80kAV3CIlPDh6RuTUzeOmGYUax';

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(resp => resp.data)
    .catch(error => {
      console.error(error);
      throw new Error(response.status);
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(resp => resp.data)
    .catch(error => {
      console.error(error);
      throw new Error(response.status);
    });
}
