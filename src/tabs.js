import createFilmPage from './films';
import createCharactersPage from './characters';
import createSWHomePage from './homePage';

const createTabs = () => {
  const content = document.querySelector('#content');
  const tabsContainer = document.createElement('div');
  tabsContainer.classList.add('tabs-container');

  const div1 = createTabElement('home-btn', 'Home');
  const div2 = createTabElement('characters-btn', 'Characters');
  const div3 = createTabElement('films-btn', 'Films');

  tabsContainer.appendChild(div1);
  tabsContainer.appendChild(div2);
  tabsContainer.appendChild(div3);

  content.appendChild(tabsContainer);

  div1.addEventListener('click', () => {
    clearContent();
    createSWHomePage();
  });
  div2.addEventListener('click', () => {
    clearContent();
    createCharactersPage();
  });
  div3.addEventListener('click', () => {
    clearContent();
    createFilmPage();
  });
};

function createTabElement(id, textContent) {
  const div = document.createElement('div');
  div.setAttribute('id', id);
  div.classList.add('tab');
  div.textContent = textContent;
  return div;
}

function clearContent() {
  const content = document.querySelector('#content');
  const pageContent = document.querySelector('.page-content');
  if (pageContent) {
    content.removeChild(pageContent);
  }
}

export default createTabs;
