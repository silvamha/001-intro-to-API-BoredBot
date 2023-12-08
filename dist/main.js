/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_6_1_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js */ \"https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_10_7_1_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js */ \"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_6_1_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js */ \"https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_www_gstatic_com_firebasejs_9_6_1_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_10_7_1_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__, https_www_gstatic_com_firebasejs_9_6_1_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_2__]);\n([https_www_gstatic_com_firebasejs_9_6_1_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_10_7_1_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__, https_www_gstatic_com_firebasejs_9_6_1_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import Firebase from the CDN\r\n\r\n\r\n// If you enabled Analytics in your project, add the Firebase SDK for Google Log In\r\n\r\n\r\n\r\n\r\n// Firebase configuration\r\nconst firebaseConfig = {\r\n  // your configuration\r\n  apiKey: \"AIzaSyA-GR-RKh2Pt_GIH3ZhUw1x62aYkNDzBnE\",\r\n  authDomain: \"my-first-firestore-db-4f59b.firebaseapp.com\",\r\n  projectId: \"my-first-firestore-db-4f59b\",\r\n  storageBucket: \"my-first-firestore-db-4f59b.appspot.com\",\r\n  messagingSenderId: \"663399641575\",\r\n  appId: \"1:663399641575:web:10fefbc05af2867f9b4d42\",\r\n};\r\n\r\n// Initialize Firebase\r\nconst app = (0,https_www_gstatic_com_firebasejs_9_6_1_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst db = (0,https_www_gstatic_com_firebasejs_9_6_1_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\r\n\r\n\r\nasync function addCityWithGeneratedId(city) {\r\n  const citiesCol = (0,https_www_gstatic_com_firebasejs_9_6_1_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_2__.collection)(db, \"cities\");\r\n  try {\r\n    const docRef = await (0,https_www_gstatic_com_firebasejs_9_6_1_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_2__.addDoc)(citiesCol, city);\r\n    console.log(\"Document written with ID: \", docRef.id);\r\n  } catch (e) {\r\n    console.error(\"Error adding document: \", e);\r\n  }\r\n}\r\n\r\nasync function addCityWithId(cityId, city) {\r\n  const cityRef = (0,https_www_gstatic_com_firebasejs_9_6_1_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_2__.doc)(db, \"cities\", cityId);\r\n\r\n  try {\r\n    await (0,https_www_gstatic_com_firebasejs_9_6_1_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_2__.setDoc)(cityRef, city);\r\n    console.log(\"City added with ID: \", cityId);\r\n  } catch (e) {\r\n    console.error(\"Error adding city: \", e);\r\n  }\r\n}\r\n\r\naddCityWithId(\"newCityId\", { name: \"Sao Paulo\", population: 1000000, country: \"Country\" });\r\n\r\nfunction listenForCityUpdates(cityId) {\r\n  const cityRef = (0,https_www_gstatic_com_firebasejs_9_6_1_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_2__.doc)(db, \"cities\", cityId);\r\n\r\n  const unsubscribe = (0,https_www_gstatic_com_firebasejs_9_6_1_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)(cityRef, (doc) => {\r\n    if (doc.exists()) {\r\n      console.log(\"Current data: \", doc.data());\r\n    } else {\r\n      console.log(\"No such document!\");\r\n    }\r\n  });\r\n\r\n  // Call `unsubscribe` when you no longer want to listen for changes\r\n}\r\n\r\nlistenForCityUpdates(\"newCityId\");\r\n\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://001-intro-to-api-boredbot/./index.js?");

/***/ }),

/***/ "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js":
false,

/***/ "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js":
false,

/***/ "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js":
false

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;

