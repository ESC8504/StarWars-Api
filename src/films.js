
const FILM_API = "https://swapi.dev/api/films/";

const createFilmPage = async () => {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');
  const headLine = document.createElement('h2');
  headLine.textContent = 'Star War Films';

  const films = await fetchData(FILM_API);
  const filmResults = films.results;

  const filmList = document.createElement('ul');
  filmList.classList.add('film-list');
  for (let film of filmResults) {
    const filmName = createFilmItem(film);
    filmList.appendChild(filmName);
  }

  const filmDetailsContainer = document.createElement('div');
  filmDetailsContainer.classList.add('details-container');
  pageContent.appendChild(headLine)
  pageContent.appendChild(filmList);
  pageContent.appendChild(filmDetailsContainer);
  content.appendChild(pageContent);
}

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const totalPages = Math.ceil(data.count / 10);

    if (totalPages > 1) {
      const additionalPagePromises = [];

      for (let i = 2; i <= totalPages; i++) {
        additionalPagePromises.push(fetchAdditionalPage(url, i));
      }
      const additionalPages = await Promise.all(additionalPagePromises);
      for (const additionalPage of additionalPages) {
        data.results = data.results.concat(additionalPage.results);
      }
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("content").innerHTML = "Error loading data.";
  }
}

async function fetchAdditionalPage(url, pgNumber) {
  const response = await fetch(`${url}?page=${pgNumber}`);
  return await response.json();
}

async function fetchCharacters(characterUrls) {
  const characterPromises = characterUrls.map(url => fetch(url).then(res => res.json()));
  const characters = await Promise.all(characterPromises);
  return characters;
}

function createFilmItem(film) {
  const item = document.createElement('li');
  item.textContent = film.title;
  item.addEventListener('click', () => {
    clearFilmList(); 
    displayFilmDetails(film);
  });
  return item;
};

async function displayFilmDetails(film) {
  const filmDetailsContainer = document.querySelector('.details-container');
  filmDetailsContainer.textContent = '';

  const filmTitle = document.createElement('h2');
  filmTitle.textContent = film.title;
  const characterDescript = document.createElement('h4');
  characterDescript.textContent = 'Characters In The Film: ';

  const characters = await fetchCharacters(film.characters);
  const characterList = document.createElement('ul');
  characterList.classList.add('detail-list');
  
  for (let character of characters) {
    const characterItem = document.createElement('li');
    characterItem.textContent = character.name;
    characterList.appendChild(characterItem);
  }

  const filmDetails = document.createElement('p');
  filmDetails.textContent = `Episode: ${film.episode_id} || Director: ${film.director} || Producer: ${film.producer} || Release Date: ${film.release_date}`;
  

  filmDetailsContainer.appendChild(filmTitle);
  filmDetailsContainer.appendChild(filmDetails);
  filmDetailsContainer.appendChild(characterDescript);
  filmDetailsContainer.appendChild(characterList);

  
}

function clearFilmList() {
  const filmList = document.querySelector('.film-list');
  if (filmList) {
    filmList.remove();
  }
}


export default createFilmPage;
export {fetchData};
export {fetchAdditionalPage};