/* eslint-disable  padded-blocks */

const home = (condition) => {
  const container = document.getElementById('container');
  const div = document.createElement('div');
  div.setAttribute('class', 'align-loading');
  container.appendChild(div);
  if(condition === 'No') {
  	div.innerHTML = '<span>Waiting for input....</span>';
  } else {
  	div.innerHTML = '<span>No Valid City Try Again...</span>';
  }
};

export default home;