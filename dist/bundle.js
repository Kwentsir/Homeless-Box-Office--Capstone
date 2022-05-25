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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  font-family: \\\"Work Sans\\\", sans-serif;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #000107;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  height: 50px;\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#logo-text {\\r\\n  font-size: 30px;\\r\\n  font-weight: 600;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n#menu-ul {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  gap: 20px;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n#now-showing {\\r\\n  color: white;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n#menu-ul li a {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n#heading h1 {\\r\\n  color: white;\\r\\n  font-size: 20px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#movie-list {\\r\\n  max-width: 1200px;\\r\\n  margin: 40px auto;\\r\\n  padding: 0 16px;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\\r\\n  grid-gap: 2rem 1rem;\\r\\n}\\r\\n\\r\\narticle {\\r\\n  background-color: white;\\r\\n  color: #000;\\r\\n  font-size: 20px;\\r\\n  padding: 4px;\\r\\n  text-align: center;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: 0 0 10px rgb(0 0 0 / 10%);\\r\\n}\\r\\n\\r\\n.genre {\\r\\n  gap: 2px;\\r\\n  border-radius: 4px;\\r\\n  font-size: 12px;\\r\\n}\\r\\n\\r\\n.button {\\r\\n  margin-bottom: 50px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  height: 30px;\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n/* comment pop-up */\\r\\n.comment-popup {\\r\\n  position: fixed;\\r\\n  border: none;\\r\\n  width: 100vw;\\r\\n  background-color: #000107;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n.comment-popup-close-button {\\r\\n  position: absolute;\\r\\n  font-size: 42px;\\r\\n  right: 10px;\\r\\n  z-index: 999;\\r\\n  cursor: pointer;\\r\\n  padding: 5px;\\r\\n  border-top: 0;\\r\\n  border-bottom-left-radius: 50%;\\r\\n  border-bottom-right-radius: 50%;\\r\\n  color: white;\\r\\n  mix-blend-mode: difference;\\r\\n}\\r\\n\\r\\n.movie-description {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.movie-description p {\\r\\n  width: 50%;\\r\\n  margin: 20px auto;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.poster-container {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#media-poster {\\r\\n  position: relative;\\r\\n  width: 20%;\\r\\n}\\r\\n\\r\\n.display-none {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#comment-section {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#comment-section p {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n#review-title {\\r\\n  color: white;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n#comment-section hr {\\r\\n  border-color: gray;\\r\\n  width: 30%;\\r\\n}\\r\\n\\r\\n/* Reservations */\\r\\n\\r\\n#display-reservations {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  background: #000;\\r\\n  padding-top: 5px;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.hide-reservation {\\r\\n  position: absolute;\\r\\n  right: 15px;\\r\\n  cursor: pointer;\\r\\n  font-size: 26px;\\r\\n  font-weight: 800;\\r\\n}\\r\\n\\r\\n.movieContent {\\r\\n  display: block;\\r\\n  margin: 0 auto;\\r\\n  padding-top: 50px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.reserve-title {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.movieContent table {\\r\\n  text-align: left;\\r\\n}\\r\\n\\r\\n.fa-heart {\\r\\n  color: red;\\r\\n  padding-right: 3rem;\\r\\n}\\r\\n\\r\\n.fa-star {\\r\\n  color: goldenrod;\\r\\n  padding-left: 3rem;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_movieList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/movieList.js */ \"./src/modules/movieList.js\");\n/* harmony import */ var _modules_movieList_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_movieList_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n_modules_movieList_js__WEBPACK_IMPORTED_MODULE_1___default()();\n// const involveapi = 'yVTwDpeZ7FtqX6HWOiZh';\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComment.js */ \"./src/modules/getComment.js\");\n\r\n\r\nconst commentFunction = () => {\r\n  const getSingleMovieData = async (id) => {\r\n    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);\r\n    const singleData = await response.json();\r\n    return singleData;\r\n  };\r\n\r\n  const commentButtons = document.querySelectorAll('.comment');\r\n\r\n  const openPopup = (event) => {\r\n    const targetId = event.target.id;\r\n\r\n    const dialog = document.querySelector('dialog');\r\n    dialog.showModal();\r\n\r\n    getSingleMovieData(targetId).then((singleData) => {\r\n      dialog.innerHTML = `\r\n          <a id=\"close-button\" class=\"comment-popup-close-button\" href=\"#\">X</a>\r\n        <div class=\"poster-container\">\r\n          <img id=\"media-poster\" src=\"${singleData.image.original}\">\r\n          </div>\r\n      <div class=\"movie-description\">\r\n          <p>${singleData.name} ${singleData.rating.average}</p>\r\n          <p><strong>Genre:</strong> ${singleData.genres}</p>\r\n          <p>${singleData.summary}</p>\r\n          </div>\r\n          <br>\r\n          <ul id=\"comment-section\">\r\n          <p id=\"review-title\">Reviews</p>\r\n          </ul>\r\n      `;\r\n\r\n      const closeButton = document.querySelector('#close-button');\r\n      closeButton.addEventListener('click', () => {\r\n        dialog.close();\r\n      });\r\n      // Get comment function\r\n      (0,_getComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(targetId);\r\n    });\r\n  };\r\n  const addClickEvent = (button) => {\r\n    button.addEventListener('click', openPopup);\r\n  };\r\n\r\n  commentButtons.forEach(addClickEvent);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentFunction);\r\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/getComment.js":
/*!***********************************!*\
  !*** ./src/modules/getComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComment = (idTarget) => {\r\n  const urlRoot = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVTwDpeZ7FtqX6HWOiZh/comments?item_id=item';\r\n\r\n  const displayCommentContainer = document.querySelector('#comment-section');\r\n\r\n  const displayComment = (comments) => {\r\n    comments.forEach((comment) => {\r\n      displayCommentContainer.innerHTML += `\r\n      <li><p class=\"comment-username\">${comment.creation_date} ${comment.username}: ${comment.comment}</p></li>\r\n      <hr>\r\n      `;\r\n    });\r\n  };\r\n\r\n  fetch(`${urlRoot}${idTarget}`)\r\n    .then((response) => response.json())\r\n    .then((json) => displayComment(json));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComment);\r\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/getComment.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLike\": () => (/* binding */ getLike),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVTwDpeZ7FtqX6HWOiZh';\r\nconst getLikes = async () => {\r\n  const response = await fetch(`${baseUrl}/likes`);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst getLike = (id, likes) => {\r\n  if (likes.length > 0) {\r\n    const result = likes.find((like) => +like.item_id === +id);\r\n    return result ? result.likes : 0;\r\n  }\r\n  return 0;\r\n};\r\n\r\nconst postLike = async (movieId) => {\r\n  const response = await fetch(`${baseUrl}/likes`, {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: movieId,\r\n    }),\r\n  });\r\n  return response;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/movieList.js":
/*!**********************************!*\
  !*** ./src/modules/movieList.js ***!
  \**********************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: The top-level-await experiment is not enabled (set experiments.topLevelAwait: true to enabled it)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\nError: The top-level-await experiment is not enabled (set experiments.topLevelAwait: true to enabled it)\\n    at C:\\\\Users\\\\kwent\\\\Desktop\\\\Microverse\\\\Module 2\\\\JavaScript-Capstone-Project\\\\node_modules\\\\webpack\\\\lib\\\\dependencies\\\\HarmonyDetectionParserPlugin.js:54:11\\n    at Hook.eval [as call] (eval at create (C:\\\\Users\\\\kwent\\\\Desktop\\\\Microverse\\\\Module 2\\\\JavaScript-Capstone-Project\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:19:10), <anonymous>:7:16)\\n    at Hook.CALL_DELEGATE [as _call] (C:\\\\Users\\\\kwent\\\\Desktop\\\\Microverse\\\\Module 2\\\\JavaScript-Capstone-Project\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:14:14)\\n    at JavascriptParser.walkAwaitExpression (C:\\\\Users\\\\kwent\\\\Desktop\\\\Microverse\\\\Module 2\\\\JavaScript-Capstone-Project\\\\node_modules\\\\webpack\\\\lib\\\\javascript\\\\JavascriptParser.js:2320:29)\\n    at JavascriptParser.walkExpression (C:\\\\Users\\\\kwent\\\\Desktop\\\\Microverse\\\\Module 2\\\\JavaScript-Capstone-Project\\\\node_modules\\\\webpack\\\\lib\\\\javascript\\\\JavascriptParser.js:2250:10)\\n    at JavascriptParser.walkVariableDeclaration (C:\\\\Users\\\\kwent\\\\Desktop\\\\Microverse\\\\Module 2\\\\JavaScript-Capstone-Project\\\\node_modules\\\\webpack\\\\lib\\\\javascript\\\\JavascriptParser.js:2104:33)\\n    at JavascriptParser.walkStatement (C:\\\\Users\\\\kwent\\\\Desktop\\\\Microverse\\\\Module 2\\\\JavaScript-Capstone-Project\\\\node_modules\\\\webpack\\\\lib\\\\javascript\\\\JavascriptParser.js:1598:10)\\n    at JavascriptParser.walkStatements (C:\\\\Users\\\\kwent\\\\Desktop\\\\Microverse\\\\Module 2\\\\JavaScript-Capstone-Project\\\\node_modules\\\\webpack\\\\lib\\\\javascript\\\\JavascriptParser.js:1459:9)\\n    at JavascriptParser.parse (C:\\\\Users\\\\kwent\\\\Desktop\\\\Microverse\\\\Module 2\\\\JavaScript-Capstone-Project\\\\node_modules\\\\webpack\\\\lib\\\\javascript\\\\JavascriptParser.js:3353:9)\\n    at C:\\\\Users\\\\kwent\\\\Desktop\\\\Microverse\\\\Module 2\\\\JavaScript-Capstone-Project\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:1087:26\");\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/movieList.js?");

/***/ }),

/***/ "./src/modules/reserve.js":
/*!********************************!*\
  !*** ./src/modules/reserve.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst enableReserve = () => {\n  const showReservation = ({ ...data }) => {\n    const reservationContent = document.querySelector('#display-reservations');\n    reservationContent.innerHTML = `\n            <span class=\"hide-reservation\" title=\"Close preview\">X</span>\n            <section class=\"movieContent\">\n                <div class=\"branding\">\n                    <img src=\"${data.logo}\" />\n                    <h3 class=\"reserve-title\">${data.title}</h3>\n                </div>\n                <table class=\"movie-metrics\">\n                    <tr>\n                        <td><b>Langauge:</b> ${data.language}</td>\n                        <td><b>Premier:</b> ${data.premier}</td>\n                    </tr>\n                    <tr>\n                        <td><b>Rating:</b> ${data.rating}</td>\n                        <td><b>Ended:</b> ${data.ended}</td>\n                    </tr>\n                </table>\n            <section>\n        `;\n    const hideReservationBtn = reservationContent.querySelector('.hide-reservation');\n    reservationContent.style.display = 'flex';\n    hideReservationBtn.addEventListener('click', () => {\n      reservationContent.style.display = 'none';\n    });\n  };\n  const movies = document.querySelectorAll('.show-reserve-popup');\n  movies.forEach((movie) => {\n    const id = movie.getAttribute('id');\n    const title = movie.getAttribute('title');\n    const logo = movie.getAttribute('banner');\n    const rating = movie.getAttribute('rating');\n    const premier = movie.getAttribute('premier');\n    const ended = movie.getAttribute('ended');\n    const language = movie.getAttribute('language');\n    movie.addEventListener('click', () => {\n      showReservation({\n        movieId: id, title, logo, premier, rating, ended, language,\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enableReserve);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/reserve.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;