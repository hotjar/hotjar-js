import Contentsquare from '@contentsquare/browser';

import './reset.css';
import './demo.css';

// buttons
const initButton = document.querySelector('#init-contentsquare-button');
const identifyButton = document.querySelector('#identify-contentsquare-button');
const eventsButton = document.querySelector('#events-contentsquare-button');
const urlButton = document.querySelector('#url-contentsquare-button');

const setStatusMessage = (selector, type, message) => {
  const statusBox = document.querySelector(selector);
  statusBox.classList.remove('alert-danger', 'alert-success', 'hidden');
  statusBox.classList.add(`alert-${type}`);
  statusBox.innerHTML = message;
};

const enableContentsquareFeatures = () => {
  identifyButton.disabled = false;
  eventsButton.disabled = false;
  urlButton.disabled = false;
};

const setContentsquareInitialized = () => {
  enableContentsquareFeatures();
  setStatusMessage('#init-contentsquare-alert', 'success', 'Contentsquare is initialized!');
};

// init button clicked
initButton.addEventListener(
  'click',
  () => {
    const siteId = 2397592;
    const contentsquareVersion = 6;
    Contentsquare.init(siteId, contentsquareVersion);

    setContentsquareInitialized();
  },
  false,
);

// identify button clicked
identifyButton.addEventListener(
  'click',
  (e) => {
    e.preventDefault();
    const userId = '_' + Math.random().toString(36).substr(2, 9);
    const firstName = document.querySelector('#identify-contentsquare-name').value || 'John';
    const favoriteColor = document.querySelector('#identify-contentsquare-color').value || 'blue';

    Contentsquare.identify(userId, {
      first_name: firstName,
      color: favoriteColor,
    });

    setStatusMessage(
      '#identify-contentsquare-alert',
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
    const subscribeToNewsletter = (email) => {
      throw new Error('Something went wrong');
    };
    const email = document.querySelector('#events-contentsquare-email').value || 'john@example.com';

    try {
      subscribeToNewsletter(email);
      Contentsquare.event('subscribed_to_newsletter');
      setStatusMessage('#events-contentsquare-alert', 'success', 'Thank you for subscribing!');
    } catch (error) {
      Contentsquare.event('error');
      setStatusMessage(
        '#events-contentsquare-alert',
        'danger',
        'Could not subscribe, please try again later.',
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
    Contentsquare.stateChange(newPage);

    setStatusMessage('#url-contentsquare-alert', 'success', 'The current page is /new');
  },
  false,
);
