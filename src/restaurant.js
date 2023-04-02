

const createRestaurantHomePage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');
  
  const image = document.createElement('img');
  image.src = './gundam-cafe.jpeg';
  pageContent.appendChild(image)

  const headLine = document.createElement('h1');
  headLine.textContent = 'Gundam Cafe!';
  pageContent.appendChild(headLine);

  const explanation = document.createElement('p');
  explanation.textContent = 'Welcome to Gundam \nCafe! Gundam Fans, we serve the best food no matter if you come from Zaft or Earth Alliance!';
  pageContent.appendChild(explanation);

  content.appendChild(pageContent)
}
export default createRestaurantHomePage;