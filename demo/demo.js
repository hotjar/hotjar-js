import Hotjar from '@hotjar/browser';

import './reset.css';

// buttons
const initButton = document.querySelector('#init-hotjar-button');

// init button clicked
initButton.addEventListener(
  'click',
  () => {
    const siteID = 123;
    const hotjarVersion = 6;
    Hotjar.init(siteID, hotjarVersion);
  },
  false,
);
