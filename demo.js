/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../dist/index.js":
/*!************************!*\
  !*** ../dist/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

Object.defineProperty(exports, "__esModule", ({value:!0}));const r=()=>"undefined"!=typeof window,e=()=>!(!r()||!window.hj),t=(e,...t)=>{if(r()&&window.hj)return window.hj(e,...t);throw Error("Hotjar is not available, make sure init has been called.")},n=(r,t,n)=>{if(!((r,e,t)=>{try{const n=document.getElementById(e)||document.createElement("script");return n.id=e,n.nonce=t,n.innerText=r,n.crossOrigin="anonymous",document.head.appendChild(n),!0}catch(r){return!1}})(`(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${r},hjsv:${t},hjdebug:${(null==n?void 0:n.debug)||!1}};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,"hotjar-init-script",null==n?void 0:n.nonce)||!e())throw Error("Failed to initialize Hotjar tracking script.")},o={init:(r,e,t)=>{try{return n(r,e,t),!0}catch(r){return console.error("Error:",r),!1}},event:r=>{try{return t("event",r),!0}catch(r){return console.error("Error:",r),!1}},identify:(r,e)=>{try{return t("identify",r,e),!0}catch(r){return console.error("Error:",r),!1}},stateChange:r=>{try{return t("stateChange",r),!0}catch(r){return console.error("Error:",r),!1}},isReady:e};exports.default=o;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./demo.css":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./demo.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n}\n\nbody {\n  font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n\n  /* css variables */\n  --color-crimson: #ea4031;\n  --color-kelly: #42ca49;\n  --color-kelly-dark: #3cba43;\n  --color-oxford: #343f4d;\n  --color-oxford-dark: #232a33;\n  --color-text: rgba(255, 255, 255, 0.83);\n\n  font-size: 16px;\n\n  background-color: var(--color-oxford-dark);\n  color: var(--color-text);\n}\n\n.hidden {\n  display: none;\n}\n\nh1,\nh2,\nh3 {\n  font-weight: 600;\n}\n\nh1 {\n  font-size: 42px;\n}\n\nh2 {\n  font-size: 32px;\n}\n\nstrong {\n  font-weight: 600;\n}\n\n#github-link {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 16px;\n}\n#github-link img {\n  width: 32px;\n}\n\n#jumbotron {\n  padding: 120px 10vw 80px 10vw;\n}\n#jumbotron h1 {\n  text-align: center;\n}\n\n#jumbotron p {\n  margin-top: 20px;\n  font-size: 20px;\n  text-align: center;\n}\n\ncode {\n  font-family: monospace;\n  font-size: 16px;\n  line-height: 1.4;\n}\n\npre {\n  font-family: monospace;\n}\npre.prettyprint {\n  width: 100% !important;\n  margin: 0 !important;\n  padding: 24px !important;\n  border-radius: 4px !important;\n  background: var(--color-oxford);\n  overflow: hidden;\n}\npre.prettyprint code {\n  background: transparent;\n}\n\n#content {\n  position: relative;\n  padding: 3vw;\n  max-width: 1200px;\n  margin: auto;\n}\n\n#content h2 {\n  margin-top: 40px;\n}\n#content h2::before {\n  display: block;\n  height: 1px;\n  width: 100%;\n  margin-bottom: 40px;\n  background: var(--color-oxford);\n  content: '';\n}\n\n#content a {\n  color: var(--color-crimson);\n  text-decoration: none;\n}\n#content a:hover {\n  text-decoration: underline;\n}\n\n#content p {\n  line-height: 1.4;\n  margin-bottom: 16px;\n}\n\n#content input {\n  font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n  margin: 10px 0 20px 0;\n  color: var(--color-text);\n  width: 200px;\n  border: none;\n  background: transparent;\n  border-radius: 2px;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 8px;\n  box-shadow: 0 0 0 1px var(--color-text);\n}\n#content input::placeholder {\n  color: var(--color-oxford);\n}\n\n.row {\n  display: flex;\n  align-items: stretch;\n  padding: 20px 0;\n}\n\n.row:last-child {\n  padding-bottom: 0;\n}\n\n.row .left {\n  position: relative;\n  width: 60%;\n  padding-right: 4vw;\n}\n\n.row .right {\n  width: 40%;\n}\n\n.button {\n  font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n  display: block;\n  background-color: var(--color-kelly);\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  border: none;\n  border-radius: 4px;\n  padding: 12px 20px;\n  cursor: pointer;\n  transition: background-color 0.1s ease-in-out;\n}\n\n.button:hover {\n  background-color: var(--color-kelly-dark);\n}\n\n.button:disabled {\n  background-color: var(--color-oxford);\n  color: var(--color-text);\n  cursor: not-allowed;\n}\n\n.alert {\n  margin: 20px auto;\n  padding: 10px 14px;\n  font-size: 16px;\n  border-radius: 2px;\n}\n\n.alert-success {\n  color: var(--color-kelly);\n  box-shadow: 0 0 0 1px var(--color-kelly);\n}\n\n.alert-danger {\n  color: var(--color-crimson);\n  box-shadow: 0 0 0 1px var(--color-crimson);\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n@media only screen and (max-width: 800px) {\n  #content .row {\n    flex-direction: column;\n  }\n\n  #content .row .left {\n    width: 100%;\n    padding: 0;\n    margin-bottom: 10px;\n  }\n\n  #content .row .right {\n    width: 100%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./demo.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,YAAY;EACZ,kCAAkC;EAClC,mCAAmC;AACrC;;AAEA;EACE,sDAAsD;;EAEtD,kBAAkB;EAClB,wBAAwB;EACxB,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;EACvB,4BAA4B;EAC5B,uCAAuC;;EAEvC,eAAe;;EAEf,0CAA0C;EAC1C,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;;;EAGE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,aAAa;AACf;AACA;EACE,WAAW;AACb;;AAEA;EACE,6BAA6B;AAC/B;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;EACtB,oBAAoB;EACpB,wBAAwB;EACxB,6BAA6B;EAC7B,+BAA+B;EAC/B,gBAAgB;AAClB;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,WAAW;EACX,WAAW;EACX,mBAAmB;EACnB,+BAA+B;EAC/B,WAAW;AACb;;AAEA;EACE,2BAA2B;EAC3B,qBAAqB;AACvB;AACA;EACE,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,sDAAsD;EACtD,qBAAqB;EACrB,wBAAwB;EACxB,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,uCAAuC;AACzC;AACA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,sDAAsD;EACtD,cAAc;EACd,oCAAoC;EACpC,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,6CAA6C;AAC/C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,qCAAqC;EACrC,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,wCAAwC;AAC1C;;AAEA;EACE,2BAA2B;EAC3B,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE;IACE,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,UAAU;IACV,mBAAmB;EACrB;;EAEA;IACE,WAAW;EACb;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap');\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n}\n\nbody {\n  font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n\n  /* css variables */\n  --color-crimson: #ea4031;\n  --color-kelly: #42ca49;\n  --color-kelly-dark: #3cba43;\n  --color-oxford: #343f4d;\n  --color-oxford-dark: #232a33;\n  --color-text: rgba(255, 255, 255, 0.83);\n\n  font-size: 16px;\n\n  background-color: var(--color-oxford-dark);\n  color: var(--color-text);\n}\n\n.hidden {\n  display: none;\n}\n\nh1,\nh2,\nh3 {\n  font-weight: 600;\n}\n\nh1 {\n  font-size: 42px;\n}\n\nh2 {\n  font-size: 32px;\n}\n\nstrong {\n  font-weight: 600;\n}\n\n#github-link {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 16px;\n}\n#github-link img {\n  width: 32px;\n}\n\n#jumbotron {\n  padding: 120px 10vw 80px 10vw;\n}\n#jumbotron h1 {\n  text-align: center;\n}\n\n#jumbotron p {\n  margin-top: 20px;\n  font-size: 20px;\n  text-align: center;\n}\n\ncode {\n  font-family: monospace;\n  font-size: 16px;\n  line-height: 1.4;\n}\n\npre {\n  font-family: monospace;\n}\npre.prettyprint {\n  width: 100% !important;\n  margin: 0 !important;\n  padding: 24px !important;\n  border-radius: 4px !important;\n  background: var(--color-oxford);\n  overflow: hidden;\n}\npre.prettyprint code {\n  background: transparent;\n}\n\n#content {\n  position: relative;\n  padding: 3vw;\n  max-width: 1200px;\n  margin: auto;\n}\n\n#content h2 {\n  margin-top: 40px;\n}\n#content h2::before {\n  display: block;\n  height: 1px;\n  width: 100%;\n  margin-bottom: 40px;\n  background: var(--color-oxford);\n  content: '';\n}\n\n#content a {\n  color: var(--color-crimson);\n  text-decoration: none;\n}\n#content a:hover {\n  text-decoration: underline;\n}\n\n#content p {\n  line-height: 1.4;\n  margin-bottom: 16px;\n}\n\n#content input {\n  font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n  margin: 10px 0 20px 0;\n  color: var(--color-text);\n  width: 200px;\n  border: none;\n  background: transparent;\n  border-radius: 2px;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 8px;\n  box-shadow: 0 0 0 1px var(--color-text);\n}\n#content input::placeholder {\n  color: var(--color-oxford);\n}\n\n.row {\n  display: flex;\n  align-items: stretch;\n  padding: 20px 0;\n}\n\n.row:last-child {\n  padding-bottom: 0;\n}\n\n.row .left {\n  position: relative;\n  width: 60%;\n  padding-right: 4vw;\n}\n\n.row .right {\n  width: 40%;\n}\n\n.button {\n  font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n  display: block;\n  background-color: var(--color-kelly);\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  border: none;\n  border-radius: 4px;\n  padding: 12px 20px;\n  cursor: pointer;\n  transition: background-color 0.1s ease-in-out;\n}\n\n.button:hover {\n  background-color: var(--color-kelly-dark);\n}\n\n.button:disabled {\n  background-color: var(--color-oxford);\n  color: var(--color-text);\n  cursor: not-allowed;\n}\n\n.alert {\n  margin: 20px auto;\n  padding: 10px 14px;\n  font-size: 16px;\n  border-radius: 2px;\n}\n\n.alert-success {\n  color: var(--color-kelly);\n  box-shadow: 0 0 0 1px var(--color-kelly);\n}\n\n.alert-danger {\n  color: var(--color-crimson);\n  box-shadow: 0 0 0 1px var(--color-crimson);\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n@media only screen and (max-width: 800px) {\n  #content .row {\n    flex-direction: column;\n  }\n\n  #content .row .left {\n    width: 100%;\n    padding: 0;\n    margin-bottom: 10px;\n  }\n\n  #content .row .right {\n    width: 100%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./reset.css":
/*!**********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./reset.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n", "",{"version":3,"sources":["webpack://./reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!*************************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \*************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./demo.css":
/*!******************!*\
  !*** ./demo.css ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_demo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./demo.css */ "../node_modules/css-loader/dist/cjs.js!./demo.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_demo_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_demo_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./reset.css":
/*!*******************!*\
  !*** ./reset.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ "../node_modules/css-loader/dist/cjs.js!./reset.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./demo.js ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hotjar_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotjar/browser */ "../dist/index.js");
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset.css */ "./reset.css");
/* harmony import */ var _demo_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo.css */ "./demo.css");





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
    _hotjar_browser__WEBPACK_IMPORTED_MODULE_0__.default.init(siteId, hotjarVersion);

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

    _hotjar_browser__WEBPACK_IMPORTED_MODULE_0__.default.identify(userId, {
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
      _hotjar_browser__WEBPACK_IMPORTED_MODULE_0__.default.event('subscribed_to_newsletter');
      setStatusMessage(
        '#events-hotjar-alert',
        'success',
        'Thank you for subscribing!'
      );
    } catch (error) {
      _hotjar_browser__WEBPACK_IMPORTED_MODULE_0__.default.event('error');
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
    _hotjar_browser__WEBPACK_IMPORTED_MODULE_0__.default.stateChange(newPage);

    setStatusMessage('#url-hotjar-alert', 'success', 'The current page is /new');
  },
  false,
);

})();

/******/ })()
;
//# sourceMappingURL=demo.js.map