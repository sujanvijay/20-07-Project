/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n    margin: 0;\n    padding: 0;\n    background: #faf8ef;\n    color: #776e65;\n    font-family: \"Helvetica Neue\", Arial, sans-serif;\n    font-size: 18px;\n}\n\nbody {\n    margin: 80px 0;\n}\n\n.heading:after {\n    content: \"\";\n    display: block;\n    clear: both;\n}\n\nh1.title {\n    font-size: 80px;\n    font-weight: bold;\n    margin: 0;\n    display: block;\n    float: left;\n}\n\n@-webkit-keyframes move-up {\n    0% {\n        top: 25px;\n        opacity: 1;\n    }\n\n    100% {\n        top: -50px;\n        opacity: 0;\n    }\n}\n\n@-moz-keyframes move-up {\n    0% {\n        top: 25px;\n        opacity: 1;\n    }\n\n    100% {\n        top: -50px;\n        opacity: 0;\n    }\n}\n\n@keyframes move-up {\n    0% {\n        top: 25px;\n        opacity: 1;\n    }\n\n    100% {\n        top: -50px;\n        opacity: 0;\n    }\n}\n\n.scores-container {\n    float: right;\n    text-align: right;\n}\n\n.score-container, .best-container {\n    position: relative;\n    display: inline-block;\n    background: #bbada0;\n    padding: 15px 25px;\n    font-size: 25px;\n    height: 25px;\n    line-height: 47px;\n    font-weight: bold;\n    border-radius: 3px;\n    color: white;\n    margin: 4px;\n    text-align: center;\n}\n\n.score-container:after, .best-container:after {\n    position: absolute;\n    width: 100%;\n    top: 10px;\n    left: 0;\n    text-transform: uppercase;\n    font-size: 13px;\n    line-height: 13px;\n    text-align: center;\n    color: #eee4da;\n}\n\n.score-container .score-addition, .best-container .score-addition {\n    position: absolute;\n    right: 30px;\n    color: red;\n    font-size: 25px;\n    line-height: 25px;\n    font-weight: bold;\n    color: rgba(119, 110, 101, 0.9);\n    z-index: 100;\n    -webkit-animation: move-up 600ms ease-in;\n    -moz-animation: move-up 600ms ease-in;\n    animation: move-up 600ms ease-in;\n    -webkit-animation-fill-mode: both;\n    -moz-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n.score-container:after {\n    content: \"Score\";\n}\n\n.best-container:after {\n    content: \"Best\";\n}\n\n.container {\n    width: 500px;\n    margin: 0 auto;\n}\n\n@-webkit-keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n@-moz-keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n@-webkit-keyframes slide-up {\n    0% {\n        margin-top: 32%;\n    }\n\n    100% {\n        margin-top: 20%;\n    }\n}\n\n@-moz-keyframes slide-up {\n    0% {\n        margin-top: 32%;\n    }\n\n    100% {\n        margin-top: 20%;\n    }\n}\n\n@keyframes slide-up {\n    0% {\n        margin-top: 32%;\n    }\n\n    100% {\n        margin-top: 20%;\n    }\n}\n\n.game-container {\n    margin-top: 40px;\n    position: relative;\n    padding: 15px;\n    cursor: default;\n    -webkit-touch-callout: none;\n    -ms-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -ms-touch-action: none;\n    touch-action: none;\n    background: #bbada0;\n    border-radius: 6px;\n    width: 500px;\n    height: 500px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.game-message {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(238, 228, 218, 0.73);\n    z-index: 100;\n    padding-top: 40px;\n    text-align: center;\n    -webkit-animation: fade-in 800ms ease 1200ms;\n    -moz-animation: fade-in 800ms ease 1200ms;\n    animation: fade-in 800ms ease 1200ms;\n    -webkit-animation-fill-mode: both;\n    -moz-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n.game-message p {\n    font-size: 60px;\n    font-weight: bold;\n    height: 60px;\n    line-height: 60px;\n    margin-top: 222px;\n}\n\n.game-message .lower {\n    display: block;\n    margin-top: 29px;\n}\n\n.game-message a {\n    display: inline-block;\n    background: #8f7a66;\n    border-radius: 3px;\n    padding: 0 20px;\n    text-decoration: none;\n    color: #f9f6f2;\n    height: 40px;\n    line-height: 42px;\n    cursor: pointer;\n    margin-left: 9px;\n}\n\n.game-message a.keep-playing-button {\n    display: none;\n}\n\n.game-message.game-won {\n    background: rgba(237, 194, 46, 0.5);\n    color: #f9f6f2;\n}\n\n.game-message.game-won a.keep-playing-button {\n    display: inline-block;\n}\n\n.game-message.game-won, .game-message.game-over {\n    display: block;\n}\n\n.game-message.game-won p, .game-message.game-over p {\n    -webkit-animation: slide-up 1.5s ease-in-out 2500ms;\n    -moz-animation: slide-up 1.5s ease-in-out 2500ms;\n    animation: slide-up 1.5s ease-in-out 2500ms;\n    -webkit-animation-fill-mode: both;\n    -moz-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n.grid-container {\n    position: absolute;\n    z-index: 1;\n}\n\n.grid-row {\n    margin-bottom: 15px;\n}\n\n.grid-row:last-child {\n    margin-bottom: 0;\n}\n\n.grid-row:after {\n    content: \"\";\n    display: block;\n    clear: both;\n}\n\n.grid-cell {\n    width: 106.25px;\n    height: 106.25px;\n    margin-right: 15px;\n    float: left;\n    border-radius: 3px;\n    background: rgba(238, 228, 218, 0.35);\n}\n\n.grid-cell:last-child {\n    margin-right: 0;\n}\n\n.tile-container {\n    position: absolute;\n    z-index: 2;\n}\n\n.tile, .tile .tile-inner {\n    width: 107px;\n    height: 107px;\n    line-height: 107px;\n}\n\n.tile.tile-position-1-1 {\n    -webkit-transform: translate(0px, 0px);\n    -moz-transform: translate(0px, 0px);\n    -ms-transform: translate(0px, 0px);\n    transform: translate(0px, 0px);\n}\n\n.tile.tile-position-1-2 {\n    -webkit-transform: translate(0px, 121px);\n    -moz-transform: translate(0px, 121px);\n    -ms-transform: translate(0px, 121px);\n    transform: translate(0px, 121px);\n}\n\n.tile.tile-position-1-3 {\n    -webkit-transform: translate(0px, 242px);\n    -moz-transform: translate(0px, 242px);\n    -ms-transform: translate(0px, 242px);\n    transform: translate(0px, 242px);\n}\n\n.tile.tile-position-1-4 {\n    -webkit-transform: translate(0px, 363px);\n    -moz-transform: translate(0px, 363px);\n    -ms-transform: translate(0px, 363px);\n    transform: translate(0px, 363px);\n}\n\n.tile.tile-position-2-1 {\n    -webkit-transform: translate(121px, 0px);\n    -moz-transform: translate(121px, 0px);\n    -ms-transform: translate(121px, 0px);\n    transform: translate(121px, 0px);\n}\n\n.tile.tile-position-2-2 {\n    -webkit-transform: translate(121px, 121px);\n    -moz-transform: translate(121px, 121px);\n    -ms-transform: translate(121px, 121px);\n    transform: translate(121px, 121px);\n}\n\n.tile.tile-position-2-3 {\n    -webkit-transform: translate(121px, 242px);\n    -moz-transform: translate(121px, 242px);\n    -ms-transform: translate(121px, 242px);\n    transform: translate(121px, 242px);\n}\n\n.tile.tile-position-2-4 {\n    -webkit-transform: translate(121px, 363px);\n    -moz-transform: translate(121px, 363px);\n    -ms-transform: translate(121px, 363px);\n    transform: translate(121px, 363px);\n}\n\n.tile.tile-position-3-1 {\n    -webkit-transform: translate(242px, 0px);\n    -moz-transform: translate(242px, 0px);\n    -ms-transform: translate(242px, 0px);\n    transform: translate(242px, 0px);\n}\n\n.tile.tile-position-3-2 {\n    -webkit-transform: translate(242px, 121px);\n    -moz-transform: translate(242px, 121px);\n    -ms-transform: translate(242px, 121px);\n    transform: translate(242px, 121px);\n}\n\n.tile.tile-position-3-3 {\n    -webkit-transform: translate(242px, 242px);\n    -moz-transform: translate(242px, 242px);\n    -ms-transform: translate(242px, 242px);\n    transform: translate(242px, 242px);\n}\n\n.tile.tile-position-3-4 {\n    -webkit-transform: translate(242px, 363px);\n    -moz-transform: translate(242px, 363px);\n    -ms-transform: translate(242px, 363px);\n    transform: translate(242px, 363px);\n}\n\n.tile.tile-position-4-1 {\n    -webkit-transform: translate(363px, 0px);\n    -moz-transform: translate(363px, 0px);\n    -ms-transform: translate(363px, 0px);\n    transform: translate(363px, 0px);\n}\n\n.tile.tile-position-4-2 {\n    -webkit-transform: translate(363px, 121px);\n    -moz-transform: translate(363px, 121px);\n    -ms-transform: translate(363px, 121px);\n    transform: translate(363px, 121px);\n}\n\n.tile.tile-position-4-3 {\n    -webkit-transform: translate(363px, 242px);\n    -moz-transform: translate(363px, 242px);\n    -ms-transform: translate(363px, 242px);\n    transform: translate(363px, 242px);\n}\n\n.tile.tile-position-4-4 {\n    -webkit-transform: translate(363px, 363px);\n    -moz-transform: translate(363px, 363px);\n    -ms-transform: translate(363px, 363px);\n    transform: translate(363px, 363px);\n}\n\n.tile {\n    position: absolute;\n    -webkit-transition: 100ms ease-in-out;\n    -moz-transition: 100ms ease-in-out;\n    transition: 100ms ease-in-out;\n    -webkit-transition-property: -webkit-transform;\n    -moz-transition-property: -moz-transform;\n    transition-property: transform;\n}\n\n.tile .tile-inner {\n    border-radius: 3px;\n    background: #eee4da;\n    text-align: center;\n    font-weight: bold;\n    z-index: 10;\n    font-size: 55px;\n}\n\n.tile.tile-2 .tile-inner {\n    background: #eee4da;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0), inset 0 0 0 1px rgba(255, 255, 255, 0);\n}\n\n.tile.tile-4 .tile-inner {\n    background: #ede0c8;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0), inset 0 0 0 1px rgba(255, 255, 255, 0);\n}\n\n.tile.tile-8 .tile-inner {\n    color: #f9f6f2;\n    background: #f2b179;\n}\n\n.tile.tile-16 .tile-inner {\n    color: #f9f6f2;\n    background: #f59563;\n}\n\n.tile.tile-32 .tile-inner {\n    color: #f9f6f2;\n    background: #f67c5f;\n}\n\n.tile.tile-64 .tile-inner {\n    color: #f9f6f2;\n    background: #f65e3b;\n}\n\n.tile.tile-128 .tile-inner {\n    color: #f9f6f2;\n    background: #edcf72;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.2381), inset 0 0 0 1px rgba(255, 255, 255, 0.14286);\n    font-size: 45px;\n}\n\n@media screen and (max-width: 520px) {\n    .tile.tile-128 .tile-inner {\n        font-size: 25px;\n    }\n}\n\n.tile.tile-256 .tile-inner {\n    color: #f9f6f2;\n    background: #edcc61;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.31746), inset 0 0 0 1px rgba(255, 255, 255, 0.19048);\n    font-size: 45px;\n}\n\n@media screen and (max-width: 520px) {\n    .tile.tile-256 .tile-inner {\n        font-size: 25px;\n    }\n}\n\n.tile.tile-512 .tile-inner {\n    color: #f9f6f2;\n    background: #edc850;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.39683), inset 0 0 0 1px rgba(255, 255, 255, 0.2381);\n    font-size: 45px;\n}\n\n@media screen and (max-width: 520px) {\n    .tile.tile-512 .tile-inner {\n        font-size: 25px;\n    }\n}\n\n.tile.tile-1024 .tile-inner {\n    color: #f9f6f2;\n    background: #edc53f;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.47619), inset 0 0 0 1px rgba(255, 255, 255, 0.28571);\n    font-size: 35px;\n}\n\n@media screen and (max-width: 520px) {\n    .tile.tile-1024 .tile-inner {\n        font-size: 15px;\n    }\n}\n\n.tile.tile-2048 .tile-inner {\n    color: #f9f6f2;\n    background: #edc22e;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.55556), inset 0 0 0 1px rgba(255, 255, 255, 0.33333);\n    font-size: 35px;\n}\n\n@media screen and (max-width: 520px) {\n    .tile.tile-2048 .tile-inner {\n        font-size: 15px;\n    }\n}\n\n.tile.tile-super .tile-inner {\n    color: #f9f6f2;\n    background: #3c3a32;\n    font-size: 30px;\n}\n\n@media screen and (max-width: 520px) {\n    .tile.tile-super .tile-inner {\n        font-size: 10px;\n    }\n}\n\n@-webkit-keyframes appear {\n    0% {\n        opacity: 0;\n        -webkit-transform: scale(0);\n        -moz-transform: scale(0);\n        -ms-transform: scale(0);\n        transform: scale(0);\n    }\n\n    100% {\n        opacity: 1;\n        -webkit-transform: scale(1);\n        -moz-transform: scale(1);\n        -ms-transform: scale(1);\n        transform: scale(1);\n    }\n}\n\n@-moz-keyframes appear {\n    0% {\n        opacity: 0;\n        -webkit-transform: scale(0);\n        -moz-transform: scale(0);\n        -ms-transform: scale(0);\n        transform: scale(0);\n    }\n\n    100% {\n        opacity: 1;\n        -webkit-transform: scale(1);\n        -moz-transform: scale(1);\n        -ms-transform: scale(1);\n        transform: scale(1);\n    }\n}\n\n@keyframes appear {\n    0% {\n        opacity: 0;\n        -webkit-transform: scale(0);\n        -moz-transform: scale(0);\n        -ms-transform: scale(0);\n        transform: scale(0);\n    }\n\n    100% {\n        opacity: 1;\n        -webkit-transform: scale(1);\n        -moz-transform: scale(1);\n        -ms-transform: scale(1);\n        transform: scale(1);\n    }\n}\n\n.tile-new .tile-inner {\n    -webkit-animation: appear 200ms ease 100ms;\n    -moz-animation: appear 200ms ease 100ms;\n    animation: appear 200ms ease 100ms;\n    -webkit-animation-fill-mode: backwards;\n    -moz-animation-fill-mode: backwards;\n    animation-fill-mode: backwards;\n}\n\n@-webkit-keyframes pop {\n    0% {\n        -webkit-transform: scale(0);\n        -moz-transform: scale(0);\n        -ms-transform: scale(0);\n        transform: scale(0);\n    }\n\n    50% {\n        -webkit-transform: scale(1.2);\n        -moz-transform: scale(1.2);\n        -ms-transform: scale(1.2);\n        transform: scale(1.2);\n    }\n\n    100% {\n        -webkit-transform: scale(1);\n        -moz-transform: scale(1);\n        -ms-transform: scale(1);\n        transform: scale(1);\n    }\n}\n\n@-moz-keyframes pop {\n    0% {\n        -webkit-transform: scale(0);\n        -moz-transform: scale(0);\n        -ms-transform: scale(0);\n        transform: scale(0);\n    }\n\n    50% {\n        -webkit-transform: scale(1.2);\n        -moz-transform: scale(1.2);\n        -ms-transform: scale(1.2);\n        transform: scale(1.2);\n    }\n\n    100% {\n        -webkit-transform: scale(1);\n        -moz-transform: scale(1);\n        -ms-transform: scale(1);\n        transform: scale(1);\n    }\n}\n\n@keyframes pop {\n    0% {\n        -webkit-transform: scale(0);\n        -moz-transform: scale(0);\n        -ms-transform: scale(0);\n        transform: scale(0);\n    }\n\n    50% {\n        -webkit-transform: scale(1.2);\n        -moz-transform: scale(1.2);\n        -ms-transform: scale(1.2);\n        transform: scale(1.2);\n    }\n\n    100% {\n        -webkit-transform: scale(1);\n        -moz-transform: scale(1);\n        -ms-transform: scale(1);\n        transform: scale(1);\n    }\n}\n\n.tile-merged .tile-inner {\n    z-index: 20;\n    -webkit-animation: pop 200ms ease 100ms;\n    -moz-animation: pop 200ms ease 100ms;\n    animation: pop 200ms ease 100ms;\n    -webkit-animation-fill-mode: backwards;\n    -moz-animation-fill-mode: backwards;\n    animation-fill-mode: backwards;\n}\n\n.above-game:after {\n    content: \"\";\n    display: block;\n    clear: both;\n}\n\n.game-intro {\n    float: left;\n    line-height: 42px;\n    margin-bottom: 0;\n}\n\n.restart-button {\n    display: inline-block;\n    background: #8f7a66;\n    border-radius: 3px;\n    padding: 0 20px;\n    text-decoration: none;\n    color: #f9f6f2;\n    height: 40px;\n    line-height: 42px;\n    cursor: pointer;\n    display: block;\n    text-align: center;\n    float: right;\n}\n\n@media screen and (max-width: 520px) {\n    html, body {\n        font-size: 15px;\n    }\n\n    body {\n        margin: 0;\n        padding: 20px;\n    }\n\n    h1.title {\n        font-size: 27px;\n        margin-top: 15px;\n    }\n\n    .container {\n        width: 280px;\n        margin: 0 auto;\n    }\n\n    .score-container, .best-container {\n        margin-top: 0;\n        padding: 15px 10px;\n        min-width: 40px;\n    }\n\n    .heading {\n        margin-bottom: 10px;\n    }\n\n    .game-intro {\n        width: 55%;\n        display: block;\n        box-sizing: border-box;\n        line-height: 1.65;\n    }\n\n    .restart-button {\n        width: 42%;\n        padding: 0;\n        display: block;\n        box-sizing: border-box;\n        margin-top: 2px;\n    }\n\n    .game-container {\n        margin-top: 17px;\n        position: relative;\n        padding: 10px;\n        cursor: default;\n        -webkit-touch-callout: none;\n        -ms-touch-callout: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -ms-touch-action: none;\n        touch-action: none;\n        background: #bbada0;\n        border-radius: 6px;\n        width: 280px;\n        height: 280px;\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n\n    .game-message {\n        display: none;\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background: rgba(238, 228, 218, 0.73);\n        z-index: 100;\n        padding-top: 40px;\n        text-align: center;\n        -webkit-animation: fade-in 800ms ease 1200ms;\n        -moz-animation: fade-in 800ms ease 1200ms;\n        animation: fade-in 800ms ease 1200ms;\n        -webkit-animation-fill-mode: both;\n        -moz-animation-fill-mode: both;\n        animation-fill-mode: both;\n    }\n\n    .game-message p {\n        font-size: 60px;\n        font-weight: bold;\n        height: 60px;\n        line-height: 60px;\n        margin-top: 222px;\n    }\n\n    .game-message .lower {\n        display: block;\n        margin-top: 29px;\n    }\n\n    .game-message a {\n        display: inline-block;\n        background: #8f7a66;\n        border-radius: 3px;\n        padding: 0 20px;\n        text-decoration: none;\n        color: #f9f6f2;\n        height: 40px;\n        line-height: 42px;\n        cursor: pointer;\n        margin-left: 9px;\n    }\n\n    .game-message a.keep-playing-button {\n        display: none;\n    }\n\n    .game-message.game-won {\n        background: rgba(237, 194, 46, 0.5);\n        color: #f9f6f2;\n    }\n\n    .game-message.game-won a.keep-playing-button {\n        display: inline-block;\n    }\n\n    .game-message.game-won, .game-message.game-over {\n        display: block;\n    }\n\n    .game-message.game-won p, .game-message.game-over p {\n        -webkit-animation: slide-up 1.5s ease-in-out 2500ms;\n        -moz-animation: slide-up 1.5s ease-in-out 2500ms;\n        animation: slide-up 1.5s ease-in-out 2500ms;\n        -webkit-animation-fill-mode: both;\n        -moz-animation-fill-mode: both;\n        animation-fill-mode: both;\n    }\n\n    .grid-container {\n        position: absolute;\n        z-index: 1;\n    }\n\n    .grid-row {\n        margin-bottom: 10px;\n    }\n\n    .grid-row:last-child {\n        margin-bottom: 0;\n    }\n\n    .grid-row:after {\n        content: \"\";\n        display: block;\n        clear: both;\n    }\n\n    .grid-cell {\n        width: 57.5px;\n        height: 57.5px;\n        margin-right: 10px;\n        float: left;\n        border-radius: 3px;\n        background: rgba(238, 228, 218, 0.35);\n    }\n\n    .grid-cell:last-child {\n        margin-right: 0;\n    }\n\n    .tile-container {\n        position: absolute;\n        z-index: 2;\n    }\n\n    .tile, .tile .tile-inner {\n        width: 58px;\n        height: 58px;\n        line-height: 58px;\n    }\n\n    .tile.tile-position-1-1 {\n        -webkit-transform: translate(0px, 0px);\n        -moz-transform: translate(0px, 0px);\n        -ms-transform: translate(0px, 0px);\n        transform: translate(0px, 0px);\n    }\n\n    .tile.tile-position-1-2 {\n        -webkit-transform: translate(0px, 67px);\n        -moz-transform: translate(0px, 67px);\n        -ms-transform: translate(0px, 67px);\n        transform: translate(0px, 67px);\n    }\n\n    .tile.tile-position-1-3 {\n        -webkit-transform: translate(0px, 135px);\n        -moz-transform: translate(0px, 135px);\n        -ms-transform: translate(0px, 135px);\n        transform: translate(0px, 135px);\n    }\n\n    .tile.tile-position-1-4 {\n        -webkit-transform: translate(0px, 202px);\n        -moz-transform: translate(0px, 202px);\n        -ms-transform: translate(0px, 202px);\n        transform: translate(0px, 202px);\n    }\n\n    .tile.tile-position-2-1 {\n        -webkit-transform: translate(67px, 0px);\n        -moz-transform: translate(67px, 0px);\n        -ms-transform: translate(67px, 0px);\n        transform: translate(67px, 0px);\n    }\n\n    .tile.tile-position-2-2 {\n        -webkit-transform: translate(67px, 67px);\n        -moz-transform: translate(67px, 67px);\n        -ms-transform: translate(67px, 67px);\n        transform: translate(67px, 67px);\n    }\n\n    .tile.tile-position-2-3 {\n        -webkit-transform: translate(67px, 135px);\n        -moz-transform: translate(67px, 135px);\n        -ms-transform: translate(67px, 135px);\n        transform: translate(67px, 135px);\n    }\n\n    .tile.tile-position-2-4 {\n        -webkit-transform: translate(67px, 202px);\n        -moz-transform: translate(67px, 202px);\n        -ms-transform: translate(67px, 202px);\n        transform: translate(67px, 202px);\n    }\n\n    .tile.tile-position-3-1 {\n        -webkit-transform: translate(135px, 0px);\n        -moz-transform: translate(135px, 0px);\n        -ms-transform: translate(135px, 0px);\n        transform: translate(135px, 0px);\n    }\n\n    .tile.tile-position-3-2 {\n        -webkit-transform: translate(135px, 67px);\n        -moz-transform: translate(135px, 67px);\n        -ms-transform: translate(135px, 67px);\n        transform: translate(135px, 67px);\n    }\n\n    .tile.tile-position-3-3 {\n        -webkit-transform: translate(135px, 135px);\n        -moz-transform: translate(135px, 135px);\n        -ms-transform: translate(135px, 135px);\n        transform: translate(135px, 135px);\n    }\n\n    .tile.tile-position-3-4 {\n        -webkit-transform: translate(135px, 202px);\n        -moz-transform: translate(135px, 202px);\n        -ms-transform: translate(135px, 202px);\n        transform: translate(135px, 202px);\n    }\n\n    .tile.tile-position-4-1 {\n        -webkit-transform: translate(202px, 0px);\n        -moz-transform: translate(202px, 0px);\n        -ms-transform: translate(202px, 0px);\n        transform: translate(202px, 0px);\n    }\n\n    .tile.tile-position-4-2 {\n        -webkit-transform: translate(202px, 67px);\n        -moz-transform: translate(202px, 67px);\n        -ms-transform: translate(202px, 67px);\n        transform: translate(202px, 67px);\n    }\n\n    .tile.tile-position-4-3 {\n        -webkit-transform: translate(202px, 135px);\n        -moz-transform: translate(202px, 135px);\n        -ms-transform: translate(202px, 135px);\n        transform: translate(202px, 135px);\n    }\n\n    .tile.tile-position-4-4 {\n        -webkit-transform: translate(202px, 202px);\n        -moz-transform: translate(202px, 202px);\n        -ms-transform: translate(202px, 202px);\n        transform: translate(202px, 202px);\n    }\n\n    .tile .tile-inner {\n        font-size: 35px;\n    }\n\n    .game-message {\n        padding-top: 0;\n    }\n\n    .game-message p {\n        font-size: 30px !important;\n        height: 30px !important;\n        line-height: 30px !important;\n        margin-top: 32% !important;\n        margin-bottom: 0 !important;\n    }\n\n    .game-message .lower {\n        margin-top: 10px !important;\n    }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ (function(module) {

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

(function () {
  var lastTime = 0;
  var vendors = ['webkit', 'moz'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
})();

function Tile(position, value) {
  this.x = position.x;
  this.y = position.y;
  this.value = value || 2;

  this.previousPosition = null;
  this.mergedFrom = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};

function Grid(size, previousState) {
  this.size = size;
  this.cells = previousState ? this.fromState(previousState) : this.empty();
}

// Build a grid of the specified size
Grid.prototype.empty = function () {
  var cells = [];

  for (var x = 0; x < this.size; x++) {
    var row = cells[x] = [];

    for (var y = 0; y < this.size; y++) {
      row.push(null);
    }
  }

  return cells;
};

Grid.prototype.fromState = function (state) {
  var cells = [];

  for (var x = 0; x < this.size; x++) {
    var row = cells[x] = [];

    for (var y = 0; y < this.size; y++) {
      var tile = state[x][y];
      row.push(tile ? new Tile(tile.position, tile.value) : null);
    }
  }

  return cells;
};

// Find the first available random position
Grid.prototype.randomAvailableCell = function () {
  var cells = this.availableCells();

  if (cells.length) {
    return cells[Math.floor(Math.random() * cells.length)];
  }
};

Grid.prototype.availableCells = function () {
  var cells = [];

  this.eachCell(function (x, y, tile) {
    if (!tile) {
      cells.push({ x: x, y: y });
    }
  });

  return cells;
};

// Call callback for every cell
Grid.prototype.eachCell = function (callback) {
  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      callback(x, y, this.cells[x][y]);
    }
  }
};

// Check if there are any cells available
Grid.prototype.cellsAvailable = function () {
  return !!this.availableCells().length;
};

// Check if the specified cell is taken
Grid.prototype.cellAvailable = function (cell) {
  return !this.cellOccupied(cell);
};

Grid.prototype.cellOccupied = function (cell) {
  return !!this.cellContent(cell);
};

Grid.prototype.cellContent = function (cell) {
  if (this.withinBounds(cell)) {
    return this.cells[cell.x][cell.y];
  } else {
    return null;
  }
};

// Inserts a tile at its position
Grid.prototype.insertTile = function (tile) {
  this.cells[tile.x][tile.y] = tile;
};

Grid.prototype.removeTile = function (tile) {
  this.cells[tile.x][tile.y] = null;
};

Grid.prototype.withinBounds = function (position) {
  return position.x >= 0 && position.x < this.size && position.y >= 0 && position.y < this.size;
};

Grid.prototype.serialize = function () {
  var cellState = [];

  for (var x = 0; x < this.size; x++) {
    var row = cellState[x] = [];

    for (var y = 0; y < this.size; y++) {
      row.push(this.cells[x][y] ? this.cells[x][y].serialize() : null);
    }
  }

  return {
    size: this.size,
    cells: cellState
  };
};

/**
 * @param {GameConfig} config
 * @constructor
 */
function KeyboardInputManager(config) {
  this.config = config;
  this.events = {};

  if (window.navigator.msPointerEnabled) {
    //Internet Explorer 10 style
    this.eventTouchstart = "MSPointerDown";
    this.eventTouchmove = "MSPointerMove";
    this.eventTouchend = "MSPointerUp";
  } else {
    this.eventTouchstart = "touchstart";
    this.eventTouchmove = "touchmove";
    this.eventTouchend = "touchend";
  }

  this.listen();
}

KeyboardInputManager.prototype.on = function (event, callback) {
  if (!this.events[event]) {
    this.events[event] = [];
  }
  this.events[event].push(callback);
};

KeyboardInputManager.prototype.emit = function (event, data) {
  var callbacks = this.events[event];
  if (callbacks) {
    callbacks.forEach(function (callback) {
      callback(data);
    });
  }
};

KeyboardInputManager.prototype.listen = function () {
  var self = this;

  var map = {
    38: 0, // Up
    39: 1, // Right
    40: 2, // Down
    37: 3, // Left
    75: 0, // Vim up
    76: 1, // Vim right
    74: 2, // Vim down
    72: 3, // Vim left
    87: 0, // W
    68: 1, // D
    83: 2, // S
    65: 3 // A
  };

  // Respond to direction keys
  document.addEventListener("keydown", function (event) {
    var modifiers = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
    var mapped = map[event.which];

    // Ignore the event if it's happening in a text field
    if (self.targetIsInput(event)) return;

    if (!modifiers) {
      if (mapped !== undefined) {
        event.preventDefault();
        self.emit("move", mapped);
      }
    }

    // R key restarts the game
    if (!modifiers && event.which === 82) {
      self.restart.call(self, event);
    }
  });

  // Respond to button presses
  this.bindButtonPress(this.config.retryButton, this.restart);
  this.bindButtonPress(".restart-button", this.restart);
  this.bindButtonPress(this.config.keepPlayingButton, this.keepPlaying);

  // Respond to swipe events
  var touchStartClientX, touchStartClientY;
  var gameContainer = this.config.gameContainer;

  gameContainer.addEventListener(this.eventTouchstart, function (event) {
    if (!window.navigator.msPointerEnabled && event.touches.length > 1 || event.targetTouches.length > 1 || self.targetIsInput(event)) {
      return; // Ignore if touching with more than 1 finger or touching input
    }

    if (window.navigator.msPointerEnabled) {
      touchStartClientX = event.pageX;
      touchStartClientY = event.pageY;
    } else {
      touchStartClientX = event.touches[0].clientX;
      touchStartClientY = event.touches[0].clientY;
    }

    event.preventDefault();
  });

  gameContainer.addEventListener(this.eventTouchmove, function (event) {
    event.preventDefault();
  });

  gameContainer.addEventListener(this.eventTouchend, function (event) {
    if (!window.navigator.msPointerEnabled && event.touches.length > 0 || event.targetTouches.length > 0 || self.targetIsInput(event)) {
      return; // Ignore if still touching with one or more fingers or input
    }

    var touchEndClientX, touchEndClientY;

    if (window.navigator.msPointerEnabled) {
      touchEndClientX = event.pageX;
      touchEndClientY = event.pageY;
    } else {
      touchEndClientX = event.changedTouches[0].clientX;
      touchEndClientY = event.changedTouches[0].clientY;
    }

    var dx = touchEndClientX - touchStartClientX;
    var absDx = Math.abs(dx);

    var dy = touchEndClientY - touchStartClientY;
    var absDy = Math.abs(dy);

    if (Math.max(absDx, absDy) > 10) {
      // (right : left) : (down : up)
      self.emit("move", absDx > absDy ? dx > 0 ? 1 : 3 : dy > 0 ? 2 : 0);
    }
  });
};

KeyboardInputManager.prototype.restart = function (event) {
  event.preventDefault();
  this.emit("restart");
};

KeyboardInputManager.prototype.keepPlaying = function (event) {
  event.preventDefault();
  this.emit("keepPlaying");
};

KeyboardInputManager.prototype.bindButtonPress = function (selector, fn) {
  var button = selector instanceof HTMLElement ? selector : document.querySelector(selector);
  button.addEventListener("click", fn.bind(this));
  button.addEventListener(this.eventTouchend, fn.bind(this));
};

KeyboardInputManager.prototype.targetIsInput = function (event) {
  return event.target.tagName.toLowerCase() === "input";
};

const GAME_WIN_CLASSNAME = 'game-won';
const GAME_OVER_CLASSNAME = 'game-over';
const SCORE_ADD_CLASSNAME = 'score-addition';

/**
 * @param {GameConfig} config
 * @constructor
 */
function HTMLActuator(config) {
  this.tileContainer = config.tileContainer;
  this.scoreContainer = config.scoreContainer;
  this.bestContainer = config.bestContainer;
  this.messageContainer = config.gameMessageContainer;

  this.score = 0;
  this.config = config;
}

HTMLActuator.prototype.actuate = function (grid, metadata) {
  var self = this;

  window.requestAnimationFrame(function () {
    self.clearContainer(self.tileContainer);

    grid.cells.forEach(function (column) {
      column.forEach(function (cell) {
        if (cell) {
          self.addTile(cell);
        }
      });
    });

    self.updateScore(metadata.score);
    self.updateBestScore(metadata.bestScore);

    if (metadata.terminated) {
      if (metadata.over) {
        self.message(false); // You lose
      } else if (metadata.won) {
        self.message(true); // You win!
      }
    }
  });
};

// Continues the game (both restart and keep playing)
HTMLActuator.prototype.continueGame = function () {
  this.clearMessage();
};

HTMLActuator.prototype.clearContainer = function (container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

HTMLActuator.prototype.addTile = function (tile) {
  var self = this;

  var wrapper = document.createElement("div");
  var inner = document.createElement("div");
  var position = tile.previousPosition || { x: tile.x, y: tile.y };
  var positionClass = this.positionClass(position);

  // We can't use classlist because it somehow glitches when replacing classes
  var classes = ["tile", this.config.getClassNameByValue(tile.value), positionClass];

  if (tile.value > this.config.endScore) classes.push("tile-super");

  this.applyClasses(wrapper, classes);

  inner.classList.add("tile-inner");
  inner.textContent = tile.value;

  if (tile.previousPosition) {
    // Make sure that the tile gets rendered in the previous position first
    window.requestAnimationFrame(function () {
      classes[2] = self.positionClass({ x: tile.x, y: tile.y });
      self.applyClasses(wrapper, classes); // Update the position
    });
  } else if (tile.mergedFrom) {
    classes.push("tile-merged");
    this.applyClasses(wrapper, classes);

    // Render the tiles that merged
    tile.mergedFrom.forEach(function (merged) {
      self.addTile(merged);
    });
  } else {
    classes.push("tile-new");
    this.applyClasses(wrapper, classes);
  }

  // Add the inner part of the tile to the wrapper
  wrapper.appendChild(inner);

  // Put the tile on the board
  this.tileContainer.appendChild(wrapper);
};

HTMLActuator.prototype.applyClasses = function (element, classes) {
  element.setAttribute("class", classes.join(" "));
};

HTMLActuator.prototype.normalizePosition = function (position) {
  return { x: position.x + 1, y: position.y + 1 };
};

HTMLActuator.prototype.positionClass = function (position) {
  position = this.normalizePosition(position);
  return "tile-position-" + position.x + "-" + position.y;
};

HTMLActuator.prototype.updateScore = function (score) {
  this.clearContainer(this.scoreContainer);

  var difference = score - this.score;
  this.score = score;

  this.scoreContainer.textContent = this.score;

  if (difference > 0) {
    var addition = document.createElement("div");
    addition.classList.add(SCORE_ADD_CLASSNAME);
    addition.textContent = "+" + difference;

    this.scoreContainer.appendChild(addition);
  }
};

HTMLActuator.prototype.updateBestScore = function (bestScore) {
  this.bestContainer.textContent = bestScore;
};

HTMLActuator.prototype.message = function (won) {
  var type = won ? GAME_WIN_CLASSNAME : GAME_OVER_CLASSNAME;
  var message = won ? this.config.playerWinMessage : this.config.playerLoseMessage;

  this.messageContainer.classList.add(type);
  this.messageContainer.getElementsByTagName("p")[0].textContent = message;
};

HTMLActuator.prototype.clearMessage = function () {
  // IE only takes one value to remove at a time.
  this.messageContainer.classList.remove(GAME_WIN_CLASSNAME);
  this.messageContainer.classList.remove(GAME_OVER_CLASSNAME);
};

window.fakeStorage = {
  _data: {},

  setItem: function (id, val) {
    return this._data[id] = String(val);
  },

  getItem: function (id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },

  removeItem: function (id) {
    return delete this._data[id];
  },

  clear: function () {
    return this._data = {};
  }
};

function LocalStorageManager() {
  this.bestScoreKey = "bestScore";
  this.gameStateKey = "gameState";

  var supported = this.localStorageSupported();
  this.storage = supported ? window.localStorage : window.fakeStorage;
}

LocalStorageManager.prototype.localStorageSupported = function () {
  var testKey = "test";

  try {
    var storage = window.localStorage;
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

// Best score getters/setters
LocalStorageManager.prototype.getBestScore = function () {
  return this.storage.getItem(this.bestScoreKey) || 0;
};

LocalStorageManager.prototype.setBestScore = function (score) {
  this.storage.setItem(this.bestScoreKey, score);
};

// Game state getters/setters and clearing
LocalStorageManager.prototype.getGameState = function () {
  var stateJSON = this.storage.getItem(this.gameStateKey);
  return stateJSON ? JSON.parse(stateJSON) : null;
};

LocalStorageManager.prototype.setGameState = function (gameState) {
  this.storage.setItem(this.gameStateKey, JSON.stringify(gameState));
};

LocalStorageManager.prototype.clearGameState = function () {
  this.storage.removeItem(this.gameStateKey);
};

/**
 * Core Game Manager
 * @param {GameConfig} config
 * @constructor
 */
function GameManager(config) {
  this.config = config;
  this.size = config.size;
  this.inputManager = new KeyboardInputManager(config);
  this.storageManager = new LocalStorageManager(config);
  this.actuator = new HTMLActuator(config);

  this.startTiles = config.startTiles;

  this.inputManager.on("move", this.move.bind(this));
  this.inputManager.on("restart", this.restart.bind(this));
  this.inputManager.on("keepPlaying", this.keepPlaying.bind(this));

  this.setup();
}

// Restart the game
GameManager.prototype.restart = function () {
  this.storageManager.clearGameState();
  this.actuator.continueGame(); // Clear the game won/lost message
  this.setup();
};

// Keep playing after winning (allows going over 2048)
GameManager.prototype.keepPlaying = function () {
  this.keepPlaying = true;
  this.actuator.continueGame(); // Clear the game won/lost message
};

// Return true if the game is lost, or has won and the user hasn't kept playing
GameManager.prototype.isGameTerminated = function () {
  return this.over || this.won && !this.keepPlaying;
};

// Set up the game
GameManager.prototype.setup = function () {
  var previousState = this.storageManager.getGameState();

  // Reload the game from a previous game if present
  if (previousState) {
    this.grid = new Grid(previousState.grid.size, previousState.grid.cells); // Reload grid
    this.score = previousState.score;
    this.over = previousState.over;
    this.won = previousState.won;
    this.keepPlaying = previousState.keepPlaying;
  } else {
    this.grid = new Grid(this.size);
    this.score = 0;
    this.over = false;
    this.won = false;
    this.keepPlaying = false;

    // Add the initial tiles
    this.addStartTiles();
  }

  // Update the actuator
  this.actuate();
  this.config.onGameStart && this.config.onGameStart();
};

// Set up the initial tiles to start the game with
GameManager.prototype.addStartTiles = function () {
  for (var i = 0; i < this.startTiles; i++) {
    this.addRandomTile();
  }
};

// Adds a tile in a random position
GameManager.prototype.addRandomTile = function () {
  if (this.grid.cellsAvailable()) {
    var value = Math.random() < 0.9 ? this.config.initValue : this.config.getNextValue(this.config.initValue);
    var tile = new Tile(this.grid.randomAvailableCell(), value);

    this.grid.insertTile(tile);
  }
};

// Sends the updated grid to the actuator
GameManager.prototype.actuate = function () {
  if (this.storageManager.getBestScore() < this.score) {
    this.storageManager.setBestScore(this.score);
  }

  // Clear the state when the game is over (game over only, not win)
  if (this.over) {
    this.storageManager.clearGameState();
  } else {
    this.storageManager.setGameState(this.serialize());
  }

  this.actuator.actuate(this.grid, {
    score: this.score,
    over: this.over,
    won: this.won,
    bestScore: this.storageManager.getBestScore(),
    terminated: this.isGameTerminated()
  });
};

// Represent the current game as an object
GameManager.prototype.serialize = function () {
  return {
    grid: this.grid.serialize(),
    score: this.score,
    over: this.over,
    won: this.won,
    keepPlaying: this.keepPlaying
  };
};

// Save all tile positions and remove merger info
GameManager.prototype.prepareTiles = function () {
  this.grid.eachCell(function (x, y, tile) {
    if (tile) {
      tile.mergedFrom = null;
      tile.savePosition();
    }
  });
};

// Move a tile and its representation
GameManager.prototype.moveTile = function (tile, cell) {
  this.grid.cells[tile.x][tile.y] = null;
  this.grid.cells[cell.x][cell.y] = tile;
  tile.updatePosition(cell);
};

// Move tiles on the grid in the specified direction
GameManager.prototype.move = function (direction) {
  // 0: up, 1: right, 2: down, 3: left
  var self = this;
  var endScore = this.config.endScore;

  if (this.isGameTerminated()) return; // Don't do anything if the game's over

  var cell, tile;

  var vector = this.getVector(direction);
  var traversals = this.buildTraversals(vector);
  var moved = false;

  // Save the current tile positions and remove merger information
  this.prepareTiles();

  // Traverse the grid in the right direction and move tiles
  traversals.x.forEach(function (x) {
    traversals.y.forEach(function (y) {
      cell = { x: x, y: y };
      tile = self.grid.cellContent(cell);

      if (tile) {
        var positions = self.findFarthestPosition(cell, vector);
        var next = self.grid.cellContent(positions.next);

        // Only one merger per row traversal?
        if (next && next.value === tile.value && !next.mergedFrom) {
          var merged = new Tile(positions.next, self.config.getNextValue(tile.value));
          merged.mergedFrom = [tile, next];

          self.grid.insertTile(merged);
          self.grid.removeTile(tile);

          // Converge the two tiles' positions
          tile.updatePosition(positions.next);

          // Update the score
          self.score += merged.value;

          // The mighty 2048 tile
          if (merged.value === endScore) {
            self.won = true;
            self.config.onGameOver && self.config.onGameOver(self.score, true);
          }
        } else {
          self.moveTile(tile, positions.farthest);
        }

        if (!self.positionsEqual(cell, tile)) {
          moved = true; // The tile moved from its original cell!
        }
      }
    });
  });

  if (moved) {
    this.addRandomTile();

    if (!this.movesAvailable()) {
      this.over = true; // Game over!
      self.config.onGameOver && self.config.onGameOver(self.score, false);
    }

    this.actuate();
  }
};

// Get the vector representing the chosen direction
GameManager.prototype.getVector = function (direction) {
  // Vectors representing tile movement
  var map = {
    0: { x: 0, y: -1 }, // Up
    1: { x: 1, y: 0 }, // Right
    2: { x: 0, y: 1 }, // Down
    3: { x: -1, y: 0 // Left
    } };

  return map[direction];
};

// Build a list of positions to traverse in the right order
GameManager.prototype.buildTraversals = function (vector) {
  var traversals = { x: [], y: [] };

  for (var pos = 0; pos < this.size; pos++) {
    traversals.x.push(pos);
    traversals.y.push(pos);
  }

  // Always traverse from the farthest cell in the chosen direction
  if (vector.x === 1) traversals.x = traversals.x.reverse();
  if (vector.y === 1) traversals.y = traversals.y.reverse();

  return traversals;
};

GameManager.prototype.findFarthestPosition = function (cell, vector) {
  var previous;

  // Progress towards the vector direction until an obstacle is found
  do {
    previous = cell;
    cell = { x: previous.x + vector.x, y: previous.y + vector.y };
  } while (this.grid.withinBounds(cell) && this.grid.cellAvailable(cell));

  return {
    farthest: previous,
    next: cell // Used to check if a merge is required
  };
};

GameManager.prototype.movesAvailable = function () {
  return this.grid.cellsAvailable() || this.tileMatchesAvailable();
};

// Check for available matches between tiles (more expensive check)
GameManager.prototype.tileMatchesAvailable = function () {
  var self = this;

  var tile;

  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      tile = this.grid.cellContent({ x: x, y: y });

      if (tile) {
        for (var direction = 0; direction < 4; direction++) {
          var vector = self.getVector(direction);
          var cell = { x: x + vector.x, y: y + vector.y };

          var other = self.grid.cellContent(cell);

          if (other && other.value === tile.value) {
            return true; // These two tiles can be merged
          }
        }
      }
    }
  }

  return false;
};

GameManager.prototype.positionsEqual = function (first, second) {
  return first.x === second.x && first.y === second.y;
};

/**
 * 2018/1/26
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   乔杨 <peiqiao.ppq@alipay.com>
 */

/**
 * create Element
 * @param {string} tagName
 * @param {?Object} attr
 * @param {?Array<Element>} children
 * @return {Element}
 */

function createElement(tagName, attr, children) {
  var node = document.createElement(tagName);
  Object.assign(node, attr);
  (children || []).forEach(function (child) {
    node.appendChild(child);
  });
  return node;
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/**
 * 2018/1/25
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   乔杨 <peiqiao.ppq@alipay.com>
 */

/**
 * default game config
 * @type {GameConfig}
 */
var DEFAULT_GAME_CONFIG = {
  size: 4,
  startTiles: 2,
  initValue: 2,
  endScore: 2048,
  keepPlaying: false,
  playerWinMessage: 'You Win!',
  playerLoseMessage: 'Game Over!',
  newGameButtonText: 'New Game',
  retryButtonText: 'Try Again',
  keepPlayingButtonText: 'Keep Going!',
  title: '2048',
  desc: 'Join the numbers and get to the 2048 tile!',
  getNextValue: function getNextValue(v) {
    return v * 2;
  },
  getClassNameByValue: function getClassNameByValue(v) {
    return 'tile-' + v;
  }
};

var Game = function () {
  /**
   * @typedef {Object} GameConfig
   * @property {number} size - size of the grid
   * @property {Element} gameContainer - the main container of the game
   * @property {?number} startTiles - numbers of tiles in the beginning
   * @property {?number} initValue - value of the first tile
   * @property {?number} endScore - number of the score to end the game
   * @property {?boolean} keepPlaying
   * @property {?string} title
   * @property {?string} desc
   * @property {?string} playerWinMessage
   * @property {?string} playerLoseMessage
   * @property {?string} retryButtonText
   * @property {?string} keepPlayingButtonText
   * @property {?Element} gameMessageContainer
   * @property {?Element} tileContainer
   * @property {?Element} retryButton
   * @property {?Element} keepPlayingButton
   * @property {?Element} scoreContainer
   * @property {?Element} bestContainer
   * @property {?function} getNextValue - return next value by previous
   * @property {?function} getClassNameByValue
   * @property {?function} onGameStart
   * @property {?function} onGameOver - onGameOver(score, isWin)
   */

  /**
   * Game Manager Class
   * @param {GameConfig} config
   */
  function Game(config) {
    classCallCheck(this, Game);

    this.config = Object.assign({}, DEFAULT_GAME_CONFIG, config);
    this.initDOM();
    this.gameManager = new GameManager(this.config);
  }

  /**
   * init default DOM element
   * @return {Object}
   */


  createClass(Game, [{
    key: 'initDOM',
    value: function initDOM() {
      var config = this.config;
      config.scoreContainer = config.scoreContainer || createElement('div', { className: 'score-container', innerText: '0' });
      config.bestContainer = config.bestContainer || createElement('div', { className: 'best-container', innerText: '0' });
      config.retryButton = config.retryButton || createElement('a', { className: 'retry-button', innerText: config.retryButtonText });
      config.keepPlayingButton = config.keepPlayingButton || createElement('a', { className: 'keep-playing-button', innerText: config.keepPlayingButtonText });
      config.keepPlayingButton.style.display = config.keepPlaying ? null : 'none';
      config.gameMessageContainer = config.gameMessageContainer || createElement('div', { className: 'game-message' }, [createElement('p'), createElement('div', { className: 'lower' }, [config.keepPlayingButton, config.retryButton])]);
      config.tileContainer = config.tileContainer || createElement('div', { className: 'tile-container' });
      config.gridContainer = createElement('div', { className: 'grid-container' }, Array.apply(null, Array(config.size)).map(function () {
        return createElement('div', { className: 'grid-row' }, Array.apply(null, Array(config.size)).map(function () {
          return createElement('div', { className: 'grid-cell' });
        }));
      }));
      if (!config.gameContainer || !(config.gameContainer instanceof window.HTMLElement)) {
        throw new TypeError('gameContainer should be an HTMLElement! did you forget to pass an element to the Game constructor?');
      }
      config.gameContainer.appendChild(createElement('div', { className: 'heading' }, [createElement('h1', { className: 'title', innerText: config.title }), createElement('div', { className: 'scores-container' }, [config.scoreContainer, config.bestContainer])]));
      config.gameContainer.appendChild(createElement('div', { className: 'above-game' }, [createElement('div', { className: 'game-intro', innerText: config.desc }), createElement('div', { className: 'restart-button', innerText: config.newGameButtonText })]));
      config.gameContainer.appendChild(createElement('div', { className: 'game-container' }, [config.gameMessageContainer, config.gridContainer, config.tileContainer]));
    }
  }]);
  return Game;
}();

return Game;

})));
//# sourceMappingURL=index.js.map


/***/ })
/******/ 	]);
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var game_2048_style_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var game_2048__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var game_2048__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(game_2048__WEBPACK_IMPORTED_MODULE_1__);



var gameContainerDiv = document.createElement('div');
gameContainerDiv.setAttribute('id', 'game-container');
gameContainerDiv.className = 'container';
document.body.appendChild(gameContainerDiv);

const game = new (game_2048__WEBPACK_IMPORTED_MODULE_1___default())({
  gameContainer: gameContainerDiv
}); 

})();

/******/ })()
;