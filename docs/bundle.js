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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  font-family: \\\"Work Sans\\\", sans-serif;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbody {\\n  background-color: #000107;\\n}\\n\\nheader {\\n  height: 50px;\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\n\\n#logo-text {\\n  font-size: 30px;\\n  font-weight: 600;\\n  color: white;\\n}\\n\\n#menu-ul {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 20px;\\n  list-style: none;\\n}\\n\\n#now-showing {\\n  color: white;\\n  font-size: 20px;\\n}\\n\\n#menu-ul li a {\\n  color: white;\\n}\\n\\n#heading h1 {\\n  color: white;\\n  font-size: 20px;\\n  text-align: center;\\n}\\n\\n#movie-list {\\n  max-width: 1200px;\\n  margin: 40px auto;\\n  padding: 0 16px;\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\\n  grid-gap: 2rem 1rem;\\n}\\n\\narticle {\\n  background-color: white;\\n  color: #000;\\n  font-size: 20px;\\n  padding: 4px;\\n  text-align: center;\\n  border-radius: 8px;\\n  box-shadow: 0 0 10px rgb(0 0 0 / 10%);\\n}\\n\\n.genre {\\n  gap: 2px;\\n  border-radius: 4px;\\n  font-size: 12px;\\n}\\n\\n.button {\\n  margin-bottom: 50px;\\n}\\n\\nfooter {\\n  height: 30px;\\n  width: 100%;\\n  text-align: center;\\n  color: white;\\n}\\n\\n/* comment pop-up */\\n.comment-popup {\\n  position: fixed;\\n  border: none;\\n  background-color: #000107;\\n  max-width: 100%;\\n  max-height: 100%;\\n}\\n\\n.comment-popup-close-button {\\n  position: fixed;\\n  font-size: 42px;\\n  right: 10px;\\n  z-index: 999;\\n  cursor: pointer;\\n  padding: 5px;\\n  border-top: 0;\\n  border-bottom-left-radius: 50%;\\n  border-bottom-right-radius: 50%;\\n  color: white;\\n  mix-blend-mode: difference;\\n}\\n\\n.movie-description {\\n  width: 100%;\\n  text-align: center;\\n}\\n\\n.movie-description p {\\n  width: 50%;\\n  margin: 20px auto;\\n  color: white;\\n}\\n\\n.poster-container {\\n  width: 100%;\\n  text-align: center;\\n}\\n\\n#media-poster {\\n  position: relative;\\n  width: 20%;\\n}\\n\\n.display-none {\\n  display: none;\\n}\\n\\n#comment-section {\\n  text-align: center;\\n  padding: 0\\n}\\n\\n#comment-section p {\\n  color: white;\\n}\\n\\n#review-title {\\n  color: white;\\n  font-weight: 600;\\n}\\n\\n#comment-section hr {\\n  border-color: gray;\\n  width: 30%;\\n  border-color: rgb(64, 64, 64);\\n  border-width: 0.1px;\\n}\\n\\n#add-comment {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  gap: 20px;\\n}\\n\\n#reviewer-name {\\n  width: 40%;\\n  height: 30px;\\n  font-size: 16px;\\n  font-weight: 400;\\n}\\n\\n#review {\\n  width: 40%;\\n  height: 100px;\\n  font-size: 16px;\\n  font-family: inherit;\\n  font-weight: 400;\\n}\\n\\n#comment-submit {\\n  width: 100px;\\n  height: 50px;\\n  font-size: 16px;\\n  background-color: white;\\n}\\n\\n/* Reservations */\\n\\n#display-reservations {\\n  display: none;\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  background: #000;\\n  padding-top: 5px;\\n  color: #fff;\\n  overflow-y: auto;\\n}\\n\\n.hide-reservation {\\n  position: absolute;\\n  right: 15px;\\n  cursor: pointer;\\n  font-size: 26px;\\n  font-weight: 800;\\n}\\n\\n.movieContent {\\n  display: block;\\n  margin: 0 auto;\\n  padding-top: 50px;\\n  text-align: center;\\n}\\n\\n.reserve-title {\\n  text-align: center;\\n  text-decoration: underline;\\n}\\n\\n.movieContent table {\\n  text-align: left;\\n}\\n\\n.fa-heart {\\n  cursor: pointer;\\n  color: red;\\n}\\n\\n.fa-star {\\n  cursor: pointer;\\n  color: goldenrod;\\n  padding-left: 3rem;\\n}\\n\\n.Reserv-form {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 15px;\\n}\\n\\n.resevertions {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 6px;\\n  list-style: none;\\n}\\n\\n.add-reserve-btn {\\n  margin-bottom: 12px;\\n  width: 121px;\\n  align-self: center;\\n  padding: 5px;\\n}\\n\\n.comment-popup-movie-name {\\n  text-transform: uppercase;\\n  font-size: 18px;\\n  font-weight: 600;\\n}\\n\\n#add-review-title {\\n  margin-top: 50px;\\n  color: white;\\n  font-weight: 600;\\n  text-align: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_movieList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/movieList.js */ \"./src/modules/movieList.js\");\n\n\n\n(0,_modules_movieList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nwindow.addEventListener('click', (e) => {\n  if (e.target.classList.contains('fa-heart')) {\n    const likes = e.target.nextElementSibling.textContent;\n    (0,_modules_movieList_js__WEBPACK_IMPORTED_MODULE_1__.listenHeartClicks)(e.target.id, likes);\n  }\n});\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComment.js */ \"./src/modules/getComment.js\");\n\n\nconst addComment = (itemId) => {\n  const urlRoot = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVTwDpeZ7FtqX6HWOiZh/comments';\n\n  const postFunction = (reviewer, review, callback) => {\n    fetch(`${urlRoot}`, {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: `item${itemId}`,\n        username: `${reviewer}`,\n        comment: `${review}`,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n\n    const formatYmd = (date) => date.toISOString().slice(0, 10);\n    const d = formatYmd(new Date());\n    callback([\n      { creation_date: `${d}`, username: `${reviewer}`, comment: `${review}` },\n    ]);\n  };\n  const commentForm = document.querySelector('#add-comment');\n  commentForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const reviewerSelector = document.querySelector('#reviewer-name');\n    const reviewSelector = document.querySelector('#review');\n    const reviewer = reviewerSelector.value;\n    const review = reviewSelector.value;\n    // Callback function display the review immediately after submitting the form\n    postFunction(reviewer, review, _getComment_js__WEBPACK_IMPORTED_MODULE_0__.displayComment);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/addComment.js?");

/***/ }),

/***/ "./src/modules/addReservation.js":
/*!***************************************!*\
  !*** ./src/modules/addReservation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reqUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVTwDpeZ7FtqX6HWOiZh/reservations/';\n\nconst addReservation = async (itemId, username, dateStart, dateEnd) => {\n  if (username.value !== '' || dateStart.value !== '' || dateEnd.value !== '') {\n    try {\n      const response = await fetch(`${reqUrl}`, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          item_id: itemId,\n          username: username.value,\n          date_start: dateStart.value,\n          date_end: dateEnd.value,\n        }),\n      });\n      const data = await response.json();\n      return data;\n    } catch (err) {\n      return false;\n    }\n  }\n  return false;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addReservation);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/addReservation.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComment.js */ \"./src/modules/getComment.js\");\n/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addComment.js */ \"./src/modules/addComment.js\");\n\n\n\nconst commentFunction = () => {\n  const getSingleMovieData = async (id) => {\n    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);\n    const singleData = await response.json();\n    return singleData;\n  };\n  const commentButtons = document.querySelectorAll('.comment');\n  const openPopup = (event) => {\n    const targetId = event.target.id;\n    const dialog = document.querySelector('dialog');\n    dialog.showModal();\n    getSingleMovieData(targetId).then((singleData) => {\n      dialog.innerHTML = `\n          <a id=\"close-button\" class=\"comment-popup-close-button\" href=\"#\">X</a>\n          <div class=\"poster-container\">\n          <img id=\"media-poster\" src=\"${singleData.image.original}\">\n          </div>\n          <div class=\"movie-description\">\n          <p class=\"comment-popup-movie-name\">${singleData.name} </strong> ⭐${singleData.rating.average}</p>\n          <p><strong>Genre:</strong> ${singleData.genres}</p>\n          <p>${singleData.summary}</p>\n          </div>\n          <br>\n         \n          <ul id=\"comment-section\">\n          <p id=\"review-title\">Reviews (<span id=\"review-count\">0</span>)</p>\n          </ul>\n          \n          <p id=\"add-review-title\">Add Review</p>\n          <form id=\"add-comment\">\n          <input id=\"reviewer-name\" type=\"text\" maxlength=\"30\" placeholder=\"Your Name\" required>\n          <textarea  id=\"review\" maxlength=\"500\" placeholder=\"Your Review\" required></textarea>\n           <button id=\"comment-submit\" type=\"submit\">SUBMIT</button>\n          <form>\n      `;\n\n      const closeButton = document.querySelector('#close-button');\n      closeButton.addEventListener('click', () => {\n        dialog.close();\n      });\n      // Call get comment function\n      (0,_getComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(targetId);\n      // Call add comment function\n      (0,_addComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(targetId);\n    });\n  };\n  const addClickEvent = (button) => {\n    button.addEventListener('click', openPopup);\n  };\n  commentButtons.forEach(addClickEvent);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentFunction);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/countComment.js":
/*!*************************************!*\
  !*** ./src/modules/countComment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countComment = () => {\n  const reviewCounterSpan = document.querySelector('#review-count');\n\n  const commentCounter = document.querySelector('#comment-section');\n  const allChildren = commentCounter.getElementsByTagName('li').length;\n\n  reviewCounterSpan.innerHTML = allChildren;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComment);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/countComment.js?");

/***/ }),

/***/ "./src/modules/fetchReservations.js":
/*!******************************************!*\
  !*** ./src/modules/fetchReservations.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst endpointLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVTwDpeZ7FtqX6HWOiZh/reservations';\n\nconst fetchReservations = async (movieId) => (\n  fetch(`${endpointLink}?item_id=${movieId}`)\n    .then((res) => res.json())\n    .then((data) => (data.error ? ({\n      error: true,\n      debug: data,\n      msg: data.error.message,\n    })\n      : ({\n        error: false,\n        data,\n      })))\n    .catch(() => ({\n      error: true,\n      msg: 'Something went wrong, please try again later',\n    }))\n);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchReservations);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/fetchReservations.js?");

/***/ }),

/***/ "./src/modules/getComment.js":
/*!***********************************!*\
  !*** ./src/modules/getComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"displayComment\": () => (/* binding */ displayComment)\n/* harmony export */ });\n/* harmony import */ var _countComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countComment.js */ \"./src/modules/countComment.js\");\n\n\nconst displayComment = (comments) => {\n  const displayCommentContainer = document.querySelector('#comment-section');\n  comments.forEach((comment) => {\n    displayCommentContainer.innerHTML += `\n    <li><p class=\"comment-username\">${comment.creation_date} ${comment.username}: ${comment.comment}</p></li>\n    <hr>\n    `;\n  });\n  (0,_countComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\nconst getComment = (idTarget) => {\n  const urlRoot = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVTwDpeZ7FtqX6HWOiZh/comments?item_id=item';\n\n  fetch(`${urlRoot}${idTarget}`)\n    .then((response) => response.json())\n    .then((json) => displayComment(json))\n    .then(() => (0,_countComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComment);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/getComment.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes)\n/* harmony export */ });\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yVTwDpeZ7FtqX6HWOiZh';\nconst getLikes = async () => {\n  const response = await fetch(`${baseUrl}/likes`);\n  const data = await response.json();\n  return data;\n};\n\nconst postLikes = async (movieId) => {\n  const response = await fetch(`${baseUrl}/likes`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: movieId }),\n  });\n  response();\n};\n\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/movieList.js":
/*!**********************************!*\
  !*** ./src/modules/movieList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"listenHeartClicks\": () => (/* binding */ listenHeartClicks)\n/* harmony export */ });\n/* harmony import */ var _reserve_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reserve.js */ \"./src/modules/reserve.js\");\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.js */ \"./src/modules/comment.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _moviecount_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moviecount.js */ \"./src/modules/moviecount.js\");\n\n\n\n\n\nconst listenHeartClicks = (movieId, likes) => {\n  const likeHeart = document.querySelectorAll('.fa-heart');\n  likeHeart.forEach((like) => {\n    if (like.id === movieId) {\n      likes = Number(likes) + 1;\n      like.nextElementSibling.textContent = likes;\n      (0,_likes_js__WEBPACK_IMPORTED_MODULE_2__.postLikes)(movieId);\n    }\n  });\n};\n\nconst updateLikes = async () => {\n  const allLikes = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();\n  const heartSpans = document.querySelectorAll('.like-span');\n\n  heartSpans.forEach((span) => {\n    allLikes.forEach((likeObject) => {\n      if (span.id === likeObject.item_id) {\n        span.innerHTML = likeObject.likes;\n      }\n    });\n  });\n};\n\nconst displayMovies = async (data) => {\n  const displayMovies = document.querySelector('#movie-list');\n  data.forEach((movie) => {\n    displayMovies.innerHTML += `<article class=\"movie\">\n    <img src=\"${movie.image.medium}\" alt=\"${movie.name}\">\n    <h2>${movie.name}</h2>\n    <p class=\"genre\">${movie.genres}</p>\n    <div class=\"like-rating\">\n    <i class=\"fa-solid fa-heart\" id=\"${movie.id}\"></i>\n    <span id=\"${movie.id}\" class=\"like-span\">0</span>\n    <i class=\"fa-solid fa-star\" id=\"${movie.id}\"></i>\n    </div>\n    <div class=\"button\">\n    <button class=\"comment\" id=\"${movie.id}\">Comments</button>\n    <button id=\"${movie.id}\" class=\"show-reserve-popup\" \n    banner=\"${movie.image.medium}\" \n    title=\"${movie.name}\" \n    language=\"${movie.language}\"\n    premier=\"${movie.premiered}\"\n    ended=\"${movie.ended}\"\n    rating=\"${movie.rating.average}\">Reservations</button>\n    </article>\n`;\n  });\n  updateLikes();\n};\n\nconst getMovies = async () => {\n  const response = await fetch('https://api.tvmaze.com/shows');\n  const data = await response.json();\n  const slicedData = data.slice(0, 50);\n  displayMovies(slicedData);\n  (0,_reserve_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_comment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_moviecount_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovies);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/movieList.js?");

/***/ }),

/***/ "./src/modules/moviecount.js":
/*!***********************************!*\
  !*** ./src/modules/moviecount.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countMovies = () => {\n  const movieCount = document.querySelector('#movies-count');\n  const movieContainer = document.querySelector('#movie-list');\n  const totalMovies = movieContainer.getElementsByTagName('article').length;\n  movieCount.innerHTML = totalMovies;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countMovies);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/moviecount.js?");

/***/ }),

/***/ "./src/modules/reserve.js":
/*!********************************!*\
  !*** ./src/modules/reserve.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addReservation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addReservation.js */ \"./src/modules/addReservation.js\");\n/* harmony import */ var _fetchReservations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchReservations.js */ \"./src/modules/fetchReservations.js\");\n\n\n\nconst enableReserve = () => {\n  const showReservation = ({ ...data }) => {\n    const reservationContent = document.querySelector('#display-reservations');\n    reservationContent.innerHTML = `\n            <span class=\"hide-reservation\" title=\"Close preview\">X</span>\n            <section class=\"movieContent\">\n                <div class=\"branding\">\n                    <img src=\"${data.logo}\" />\n                    <h3 class=\"reserve-title\">${data.title}</h3>\n                </div>\n                <table class=\"movie-metrics\">\n                    <tr>\n                        <td><b>Langauge:</b> ${data.language}</td>\n                        <td><b>Premier:</b> ${data.premier}</td>\n                    </tr>\n                    <tr>\n                        <td><b>Rating:</b> ${data.rating}</td>\n                        <td><b>Ended:</b> ${data.ended}</td>\n                    </tr>\n                </table>\n                <h3 class=\"reservation-title\">\n                  reservation (<span class=\"total-reservations\">0</span>)\n                </h3>\n                <ul class=\"resevertions\">\n                  Fetching data....\n                </ul>\n                \n    <h3 class=\"Reservation-title\">\n    </h3>\n    <div class=\"Reserv-form\">\n      <h2>Add a Reservation</h2>\n      <input type=\"text\" name=\"username\" class=\"username\" placeholder=\"Your name\" required>\n      <input type=\"text\" name=\"dateStart\" class=\"dateStart\" placeholder=\"Start date\" required>\n      <input type=\"text\" name=\"dateEnd\" class=\"dateEnd\" placeholder=\"End date\" required>\n      <button class=\"add-reserve-btn\" id=\"${data.id}\" type=\"submit\">Submit</button>\n    </div>\n        `;\n    const hideReservationBtn = reservationContent.querySelector('.hide-reservation');\n    reservationContent.style.display = 'flex';\n    hideReservationBtn.addEventListener('click', () => {\n      reservationContent.style.display = 'none';\n    });\n    const getData = () => {\n      (0,_fetchReservations_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.id).then((res) => {\n        const reservations = reservationContent.querySelector('.resevertions');\n        const reservationsCounter = reservationContent.querySelector('.total-reservations');\n        if (res.error === true) {\n          reservationsCounter.innerHTML = '0';\n          reservations.innerHTML = 'No reservations have been filed yet. Be the first to make a reservation :-)';\n        } else {\n          reservations.innerHTML = '';\n          reservationsCounter.innerHTML = res.data.length;\n          res.data.forEach((reservation) => {\n            reservations.innerHTML += `\n            <li>From ${reservation.date_start} to ${reservation.date_end} by ${reservation.username}</li>\n            `;\n          });\n        }\n      });\n    };\n    // add reservation\n    const name = document.querySelector('.username');\n    const start = document.querySelector('.dateStart');\n    const end = document.querySelector('.dateEnd');\n    const reserveBtn = document.querySelector('.add-reserve-btn');\n    reserveBtn.addEventListener('click', (e) => {\n      const id = e.target.attributes.id.value;\n      (0,_addReservation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, name, start, end).then(\n        getData(),\n      );\n      name.value = '';\n      start.value = '';\n      end.value = '';\n    });\n\n    // fetch reservations from API\n    (0,_fetchReservations_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.id).then((res) => {\n      const reservations = reservationContent.querySelector('.resevertions');\n      const reservationsCounter = reservationContent.querySelector('.total-reservations');\n      if (res.error === true) {\n        reservationsCounter.innerHTML = '0';\n        reservations.innerHTML = 'No reservations have been filed yet. Be the first to make a reservation :-)';\n      } else {\n        reservations.innerHTML = '';\n        reservationsCounter.innerHTML = res.data.length;\n        res.data.forEach((reservation) => {\n          reservations.innerHTML += `\n          <li>From ${reservation.date_start} to ${reservation.date_end} by ${reservation.username}</li>\n          `;\n        });\n      }\n    });\n  };\n  const movies = document.querySelectorAll('.show-reserve-popup');\n  movies.forEach((movie) => {\n    const id = movie.getAttribute('id');\n    const title = movie.getAttribute('title');\n    const logo = movie.getAttribute('banner');\n    const rating = movie.getAttribute('rating');\n    const premier = movie.getAttribute('premier');\n    const ended = movie.getAttribute('ended');\n    const language = movie.getAttribute('language');\n    movie.addEventListener('click', () => {\n      showReservation({\n        id, title, logo, premier, rating, ended, language,\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enableReserve);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/reserve.js?");

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