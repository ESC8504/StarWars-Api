import createFilmPage from "./films";
import createcharactersPage from "./characters";
import createSWHomePage from "./homePage";


const createTabs = () => {
  const content = document.querySelector("#content");
  const tabsContainer = document.createElement('div');
  tabsContainer.classList.add('tabs-container');


  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');

  div1.setAttribute('id', 'home-btn');
  div2.setAttribute('id', 'characters-btn');
  div3.setAttribute('id', 'films-btn');

  div1.classList.add('tab');
  div2.classList.add('tab');
  div3.classList.add('tab');

  div1.textContent = 'Home';
  div2.textContent = 'Characters';
  div3.textContent = 'Films';

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
    createcharactersPage();
  });
  div3.addEventListener('click', () => {
    clearContent();
    createFilmPage();
  });
}

function clearContent() {
  const content = document.querySelector("#content");
  const pageContent = document.querySelector('.page-content')
  if (pageContent) {
    content.removeChild(pageContent);
  }
}

export default createTabs;