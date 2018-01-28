require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__koa_cors__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__koa_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__koa_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commitScraper__ = __webpack_require__(5);





const app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
const router = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a();

app.use(__WEBPACK_IMPORTED_MODULE_2__koa_cors___default()());

router.get('/', async ctx => {
  ctx.body = `Welcome to the hack the graph API`;
});

router.get('/commits/:userId', async ctx => {
  const response = await Object(__WEBPACK_IMPORTED_MODULE_3__commitScraper__["a" /* default */])(ctx.params.userId);

  if (!response) {
    ctx.status = 404;
    ctx.body = {
      error: `${ctx.params.userId} Not found on GitHub`
    };
  }

  ctx.body = response;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(2000, () => {
  console.log('Open http://localhost:2000');
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@koa/cors");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_puppeteer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_puppeteer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_puppeteer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_os__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_os___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_os__);



/* harmony default export */ __webpack_exports__["a"] = (async function commitScraper(username) {
  let commitData = {};
  const currentYear = new Date().getFullYear();

  // const browser = await puppeteer.launch({ headless: false })
  const browser = await __WEBPACK_IMPORTED_MODULE_0_puppeteer___default.a.launch();
  const page = await browser.newPage();

  const response = await page.goto(`https://github.com/${username}`);

  if (response.headers().status === '404 Not Found') {
    await browser.close();
    return false;
  }

  //get our possible years of contribution
  let contributionYears = await page.$$('.profile-timeline-year-list li a');

  let years = [...Array(contributionYears.length).keys()];
  //read the graph and extract its data

  for (let year of years) {
    let workingYear = currentYear - year;
    await page.goto(`https://github.com/users/${username}/contributions?to=${workingYear}-01-01`);
    let data = await page.evaluate(() => [...document.querySelectorAll('rect.day')].map(day => ({
      count: day.dataset.count,
      date: day.dataset.date
    })));
    data.forEach(day => {
      const key = day.date.split('-').join('');
      commitData[key] = {
        githubCount: +day.count,
        hackCount: 0
      };
    });
  }
  await browser.close();

  return commitData;
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("puppeteer");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map