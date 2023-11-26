import { fetchBreeds, fetchCatByBreed } from './cat-api';


export function hideElement(element) {
  element.classList.add('is-hidden');
}

export function showElement(element) {
  element.classList.remove('is-hidden');
}

export function replaceElement(element) {
  element.classList.contains('is-hidden')
    ? (element.classList.remove('is-hidden'), element.classList.add('loader'))
    : (element.classList.remove('loader'), element.classList.add('is-hidden'));
}


// export function populateBreeds() {
//   fetchBreeds()
//     .then(data => {
//       data.forEach(element => {
//         arrBreedsId.push({ text: element.name, value: element.id });
//       });
//       new SlimSelect({
//         select: selector,
//         data: arrBreedsId,
//       });
//     })
//     .catch(onFetchError)
//     .finally(() => {
//       hideElement(loader);
//       hideElement(error);
//       hideElement(divCatInfo);
//     });
// }
