import createSWHomePage from './homePage';
import createTabs from './tabs';

function initialLoad() {
  createTabs();
  createSWHomePage();
}

export default initialLoad;