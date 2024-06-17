# @contentsquare/browser

[![@contentsquare/browser](https://img.shields.io/npm/v/@contentsquare/browser.svg?label=@contentsquare/browser)](https://www.npmjs.com/package/@contentsquare/browser)

> Bring [Contentsquare](https://www.contentsquare.com/) directly to your application

## Installation

Add this package as a dependency in your project, then import the library in your code.

```bash
yarn add @contentsquare/browser
```

```javascript
import Contentsquare from '@contentsquare/browser';
```

## Initialize Contentsquare

In order for Contentsquare to run, it needs to be initialized with your site ID.
You can find your site ID on [this page](https://insights.hotjar.com/site/list) just before your site name.

```javascript
const siteId = 123;
const contentsquareVersion = 6;

Contentsquare.init(siteId, contentsquareVersion);

// Initializing with `debug` option:
Contentsquare.init(siteId, contentsquareVersion, {
  debug: true
});
```

## Identify API

One of the main interest of this library is to be able to use [Contentsquare Identify API](https://help.hotjar.com/hc/en-us/articles/360033640653-Identify-API-Reference).

```javascript
const userId = 'abc_123';
const firstName = 'John';
const favoriteColor = 'blue';

Contentsquare.identify(userId, {
  first_name: firstName,
  color: favoriteColor,
});
```

## Events API

You can also track specific actions taken by your users and send that data to Contentsquare via the [Contentsquare Events API]("https://help.hotjar.com/hc/en-us/articles/4405109971095-Events-API-Reference").

```javascript
const actionName = 'error';
Contentsquare.event(actionName);
```

## Manual URL changes

Depending on how your website routing works, you might need to manually instruct Contentsquare when a route change has happened. [More details about URL changes](https://help.hotjar.com/hc/en-us/articles/360034378534).

```javascript
const newPage = '/new';

Contentsquare.stateChange(newPage);
```

## CSP

If the project uses [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), you can add a special string to your server response headers so that the Contentsquare script loads without problems

```javascript
// Initializing with `nonce` option:
Contentsquare.init(siteId, contentsquareVersion, {
  nonce: 'rAnDoM'
});
```

```
Content-Security-Policy: 
  script-src *.hotjar.com 'nonce-rAnDoM'; 
  frame-src *.hotjar.com;
```

## Example

You can find a working example on [GitHub Pages](https://hotjar.github.io/hotjar-js/).
