import {
  hideElement,
  showElement,
  replaceElement,
  populateBreeds,
  displayCatInfo,
} from './exportFn';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import './styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const ref = {
  selector: document.querySelector('.breed-select'),
  divCatInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};
const { selector, divCatInfo, loader, error } = ref;

hideElement(loader);
hideElement(error);
hideElement(divCatInfo);

let arrBreedsId = [];
fetchBreeds()
  .then(data => {
    data.forEach(element => {
      arrBreedsId.push({ text: element.name, value: element.id });
    });
    new SlimSelect({
      select: selector,
      data: arrBreedsId,
    });
  })
  .catch(onFetchError)

selector.addEventListener('change', onSelectBreed);

function onSelectBreed(event) {
  replaceElement(loader);
  hideElement(selector);
  hideElement(divCatInfo);

  const breedId = event.currentTarget.value;
  fetchCatByBreed(breedId)
    .then(data => {
      const { url, breeds } = data[0];
      divCatInfo.innerHTML = createCatInfoHTML(url, breeds[0]);
    })
    .catch(onFetchError)
    .finally(() => {
      replaceElement(loader);
      showElement(selector);
      showElement(divCatInfo);
    });
}

function onFetchError(error) {
  showElement(selector);
  replaceElement(loader);

  Notify.failure(
    'Oops! Something went wrong! Try reloading the page or select another cat breed!',
    {
      position: 'center-center',
      timeout: 5000,
      width: '400px',
      fontSize: '24px',
    }
  );
}

function createCatInfoHTML(url, breed) {
  return `<div class="box-img"><img src="${url}" alt="${breed.name}" width="400"/></div><div class="box"><h1>${breed.name}</h1><p>${breed.description}</p><p><b>Temperament:</b> ${breed.temperament}</p></div>`;
}