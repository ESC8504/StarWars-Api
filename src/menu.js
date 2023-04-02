const menu = [
  {
    name: "Gundam Stew",
    description:
      "GUNDAM Café Original Gratin-Style Cream Stew",
    price: "1,058 yen",
  },
  {
    name: "Acguy Curry",
    description:
      "GUNDAM Café Original Mild Curry",
    price: "1,058 yen",
  },
  {
    name: "Waldfeld’s Kitsune Udon",
    description:
      "Steamed Chicken, Lemon Kitsune Udon, and Mixed Vegetable Tempura Bowl",
    price: "1,080 yen",
  },
];

const createMenuPage = () => {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  const headLine = document.createElement('h1');
  headLine.textContent = 'Menu';

  const menuList = document.createElement('ul');
  menuList.classList.add('menu-list');

  for (let i = 0; i < menu.length; i++) {
    const menuItem = document.createElement('li');
    menuItem.textContent = `${menu[i].name}`;
    const menuItemDescription = document.createElement('p');
    menuItemDescription.textContent = `${menu[i].description}`;

    const menuItemPrice = document.createElement('span');
    menuItemPrice.textContent = `${menu[i].price}`;

    menuItem.appendChild(menuItemDescription);
    menuItem.appendChild(menuItemPrice);
    menuList.appendChild(menuItem);
  }
  pageContent.appendChild(headLine);
  pageContent.appendChild(menuList);
  content.appendChild(pageContent); 
}
export default createMenuPage;