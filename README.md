# @hotjar/browser

[![@hotjar/browser](https://img.shields.io/npm/v/@hotjar/browser.svg?label=@hotjar/browser)](https://www.npmjs.com/package/@hotjar/browser)

> Bring [Hotjar](https://www.hotjar.com/) directly to your application

## Installation

Add this package as a dependency in your project, then import the library in your code.

```bash
yarn add @hotjar/browser
```

```javascript
import Hotjar from '@hotjar/browser';
```

## Initialize Hotjar

In order for Hotjar to run, it needs to be initialized with your site ID.
You can find your site ID on [this page](https://insights.hotjar.com/site/list) just before your site name.

```javascript
const siteId = 123;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

// Initializing with `debug` option:
Hotjar.init(siteId, hotjarVersion, {
  debug: true
});
```

## Identify API

One of the main interest of this library is to be able to use [Hotjar Identify API](https://help.hotjar.com/hc/en-us/articles/360033640653-Identify-API-Reference).

```javascript
const userId = 'abc_123';
const firstName = 'John';
const favoriteColor = 'blue';

Hotjar.identify(userId, {
  first_name: firstName,
  color: favoriteColor,
});
```

## Events API

You can also track specific actions taken by your users and send that data to Hotjar via the [Hotjar Events API]("https://help.hotjar.com/hc/en-us/articles/4405109971095-Events-API-Reference").

```javascript
const actionName = 'error';
Hotjar.event(actionName);
```

## Manual URL changes

Depending on how your website routing works, you might need to manually instruct Hotjar when a route change has happened. [More details about URL changes](https://help.hotjar.com/hc/en-us/articles/360034378534).

```javascript
const newPage = '/new';

Hotjar.stateChange(newPage);
```

## CSP

If the project uses [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), you can add a special string to your server response headers so that the HotJar script loads without problems

```javascript
// Initializing with `nonce` option:
Hotjar.init(siteId, hotjarVersion, {
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
