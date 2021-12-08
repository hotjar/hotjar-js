import Hotjar from '@hotjar/browser';

import './reset.css';
import './demo.css';

// buttons
const initButton = document.querySelector('#init-hotjar-button');
const identifyButton = document.querySelector('#identify-hotjar-button');
const eventsButton = document.querySelector('#events-hotjar-button');
const urlButton = document.querySelector('#url-hotjar-button');

const setStatusMessage = (selector, type, message) => {
  const statusBox = document.querySelector(selector);
  statusBox.classList.remove('alert-danger', 'alert-success', 'hidden');
  statusBox.classList.add(`alert-${type}`);
  statusBox.innerHTML = message;
};

const enableHotjarFeatures = () => {
  identifyButton.disabled = false;
  eventsButton.disabled = false;
  urlButton.disabled = false;
};

const setHotjarInitialized = () => {
  enableHotjarFeatures();
  setStatusMessage('#init-hotjar-alert', 'success', 'Hotjar is initialized!');
};

// init button clicked
initButton.addEventListener(
  'click',
  () => {
    const siteId = 2397592;
    const hotjarVersion = 6;
    Hotjar.init(siteId, hotjarVersion);

    setHotjarInitialized();
  },
  false,
);

// identify button clicked
identifyButton.addEventListener(
  'click',
  (e) => {
    e.preventDefault();
    const userId = '_' + Math.random().toString(36).substr(2, 9);
    const firstName = document.querySelector('#identify-hotjar-name').value || 'John';
    const favoriteColor = document.querySelector('#identify-hotjar-color').value || 'blue';

    Hotjar.identify(userId, {
      first_name: firstName,
      color: favoriteColor,
    });

    setStatusMessage(
      '#identify-hotjar-alert',
      'success',
      `<strong>${firstName}</strong> identified with <strong>${favoriteColor}</strong> as favorite color`,
    );
  },
  false,
);

// events button clicked
eventsButton.addEventListener(
  'click', 
  (e) => {
    e.preventDefault();
    const subscribeToNewsletter = (email) => { throw new Error('Something went wrong') };
    const email = document.querySelector('#events-hotjar-email').value || 'john@example.com';

    try {
      subscribeToNewsletter(email);
      setStatusMessage(
        '#events-hotjar-alert',
        'success',
        'Thank you for subscribing!'
      );
    } catch (error) {
      Hotjar.event('error');
      setStatusMessage(
        '#events-hotjar-alert',
        'danger',
        'Could not subscribe, please try again later.'
      );
    }
  },
  false,
);

// url button clicked
urlButton.addEventListener(
  'click',
  () => {
    const newPage = '/new';
    Hotjar.stateChange(newPage);

    setStatusMessage('#url-hotjar-alert', 'success', 'The current page is /new');
  },
  false,
);
