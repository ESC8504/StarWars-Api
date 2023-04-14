import { fetchData, displayFilmDetails } from './films';

const PEOPLE_API = 'https://swapi.dev/api/people/';

const createCharactersPage = async () => {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');
  const headLine = document.createElement('h2');
  headLine.classList.add('head-line');
  headLine.textContent = 'Star War Characters';

  const characters = await fetchData(PEOPLE_API);
  const charactersResults = characters.results;

  const charactersList = document.createElement('ul');
  charactersList.classList.add('characters-list');

  for (let character of charactersResults) {
    const characterName = createCharacter(character);
    charactersList.appendChild(characterName);
  }

  const charactersDetailsContainer = document.createElement('div');
  charactersDetailsContainer.classList.add('details-container');
  pageContent.appendChild(headLine);
  pageContent.appendChild(charactersList);
  pageContent.appendChild(charactersDetailsContainer);
  content.appendChild(pageContent);

  pageContent.appendChild(charactersList);
  content.appendChild(pageContent);
};

function clearCharacterList() {
  const charactersList = document.querySelector('.characters-list');
  if (charactersList) {
    charactersList.remove();
  }
}

function createCharacter(character) {
  const item = document.createElement('li');
  item.textContent = character.name;
  item.addEventListener('click', () => {
    clearCharacterList();
    displayCharacterDetails(character);
  });
  return item;
}

async function fetchFilms(filmsUrls) {
  const filmPromises = filmsUrls.map(url => fetch(url).then(res => res.json()));
  const films = await Promise.all(filmPromises);
  return films;
}

async function displayCharacterDetails(character) {
  const charactersDetailsContainer = document.querySelector('.details-container');
  charactersDetailsContainer.textContent = '';

  const films = await fetchFilms(character.films);
  const filmsList = document.createElement('ul');
  filmsList.classList.add('detail-list');

  for (let film of films) {
    const filmItem = document.createElement('li');
    filmItem.textContent = film.title;
    filmItem.addEventListener('click', () => {
      const headLine = document.querySelector('.head-line');
      headLine.textContent = 'Star Wars Films';
      displayFilmDetails(film);
    });
    filmsList.appendChild(filmItem);
  }

  const peopleName = document.createElement('h2');
  peopleName.textContent = character.name;
  const filmDescript = document.createElement('h4');
  filmDescript.textContent = 'Film That Has The Character In: ';

  const characterDetails = document.createElement('p');
  characterDetails.textContent = `Height: ${character.height} || Mass: ${character.mass} || Hair color: ${character.hair_color} || Gender: ${character.gender}`;

  charactersDetailsContainer.appendChild(peopleName);
  charactersDetailsContainer.appendChild(characterDetails);
  charactersDetailsContainer.appendChild(filmDescript);
  charactersDetailsContainer.appendChild(filmsList);
}

export default createCharactersPage;
export { displayCharacterDetails };
