
const createContactPage = () => {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  const headLine = document.createElement('h1');
  headLine.textContent = 'Contact US';

  const form = document.createElement('form');
  form.classList.add('contact-form');

  const name = document.createElement('input');
  name.type = 'text';
  name.placeholder = 'Enter name';
  form.appendChild(name);

  const phoneNumber = document.createElement('input');
  phoneNumber.type = 'tel';
  phoneNumber.placeHolder = 'Enter phone number';
  form.appendChild(phoneNumber);

  const email = document.createElement('input');
  email.type = 'text';
  email.placeholder = 'Enter email';
  form.appendChild(email);

  const submitBtn = document.createElement('input');
  submitBtn.type = 'submit';
  submitBtn.value = 'Submit';
  form.appendChild(submitBtn);

  pageContent.appendChild(form);
  content.appendChild(pageContent);
}

export default createContactPage;