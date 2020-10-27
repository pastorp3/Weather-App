/* eslint-disable  padded-blocks */

const home = () => {
  const container = document.getElementById('container');
  const div = document.createElement('div');
  div.setAttribute('class', 'align-loading');
  container.appendChild(div);
  div.innerHTML = '<span>Waiting for input....</span>';
};

export default home;