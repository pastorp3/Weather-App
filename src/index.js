import getData from './getdata';

  const searchbttn = document.getElementById('searchbttn');
  searchbttn.addEventListener('click', search => {
  const form = document.getElementsByTagName('form')[0];
  const input = document.getElementById('search');
  const location = input.value;
  getData(location);
  form.reset();
});