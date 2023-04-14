

const createSWHomePage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');
  
  const freedom = document.createElement('img');
  freedom.src = './darth.svg';
  freedom.classList.add('freedom-gundam');
  pageContent.appendChild(freedom)

  const headLine = document.createElement('h1');
  headLine.textContent = 'STAR WARS';
  pageContent.appendChild(headLine);

  const explanation = document.createElement('p');
  explanation.textContent = 'Welcome to an Interactive Galactic Experience';
  pageContent.appendChild(explanation);

  const mainImage = document.createElement('img');
  mainImage.src = './star-wars.jpeg';
  pageContent.appendChild(mainImage)

  content.appendChild(pageContent)
}
export default createSWHomePage;