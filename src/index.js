/* eslint-disable  no-unused-vars */

import getData from './getdata';
import home from './home';

const searchbttn = document.getElementById('searchbttn');
searchbttn.addEventListener('click', search => {
  const form = document.getElementsByTagName('form')[0];
  const input = document.getElementById('search');
  const location = input.value;
  getData(location);
  form.reset();
});

home();