webpackJsonp([0],{

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(89)();
exports.push([module.i, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n/**\r\n * 1. Change the default font family in all browsers (opinionated).\r\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\r\n * Remove the margin in all browsers (opinionated).\r\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Add the correct display in IE 9-.\r\n * 1. Add the correct display in Edge, IE, and Firefox.\r\n * 2. Add the correct display in IE.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  /* 1 */\n  display: block; }\n\n/**\r\n * Add the correct display in IE 9-.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; }\n\n/**\r\n * Add the correct display in iOS 4-7.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\r\n * Add the correct display in IE 10-.\r\n * 1. Add the correct display in IE.\r\n */\ntemplate,\n[hidden] {\n  display: none; }\n\n/* Links\r\n   ========================================================================== */\n/**\r\n * 1. Remove the gray background on active links in IE 10.\r\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\r\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\r\n * Remove the outline on focused links when they are also active or hovered\r\n * in all browsers (opinionated).\r\n */\na:active,\na:hover {\n  outline-width: 0; }\n\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * 1. Remove the bottom border in Firefox 39-.\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\r\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\r\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\r\n * Add the correct font style in Android 4.3-.\r\n */\ndfn {\n  font-style: italic; }\n\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\r\n * Add the correct background and color in IE 9-.\r\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\r\n * Add the correct font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove the border on images inside links in IE 10-.\r\n */\nimg {\n  border-style: none;\n  max-width: 100%; }\n\n/**\r\n * Hide the overflow in IE.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\r\n * Add the correct margin in IE 8.\r\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/* Forms\r\n   ========================================================================== */\n/**\r\n * 1. Change font properties to `inherit` in all browsers (opinionated).\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\r\n * Restore the font weight unset by the previous rule.\r\n */\noptgroup {\n  font-weight: bold; }\n\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\r\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\r\n *    controls in Android 4.\r\n * 2. Correct the inability to style clickable types in iOS and Safari.\r\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\r\n * Change the border, margin, and padding in all browsers (opinionated).\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\r\n * Remove the default vertical scrollbar in IE.\r\n */\ntextarea {\n  overflow: auto;\n  resize: none; }\n\n/**\r\n * 1. Add the correct box sizing in IE 10-.\r\n * 2. Remove the padding in IE 10-.\r\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\r\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\r\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\r\n */\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54; }\n\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box; }\n\nsvg {\n  max-width: 100%; }\n\n/**\r\n * Hack to remove Chrome's yellow background on autofilling inputs\r\n */\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  transition: background-color 500000s ease-in-out 0s, color 500000s ease-in-out 0s; }\n\n/**\r\n * Fix for IE select bars\r\n */\nselect::-ms-value,\nselect:focus::-ms-value {\n  background: none; }\n\ntable {\n  border-collapse: collapse; }\n\np {\n  margin: 0 0 1em 0; }\n\nbody {\n  background: #f5f5f5;\n  color: #252525;\n  font-family: 'Roboto', sans-serif; }\n\n.container {\n  max-width: 1170px;\n  margin: 0 auto;\n  text-align: center; }\n\n.header {\n  background: #26a65b;\n  background: linear-gradient(to right, #26a65b 0%, #d18b36 20%, #fa9300 33%, #d18b36 45%, #017cff 71%, #b45469 99%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#26a65b', endColorstr='#b45469', GradientType=1);\n  height: 50px; }\n\n.color_0 {\n  background-color: #bca2e0; }\n\n.color_1 {\n  background-color: #d6675b; }\n\n.color_2 {\n  background-color: #ffd68f; }\n\n.color_3 {\n  background-color: #86d8a3; }\n\n.color_4 {\n  background-color: #94bcda; }\n\n.card {\n  color: #fff;\n  border-radius: 10px;\n  vertical-align: top;\n  width: 600px;\n  margin: 15px 0;\n  padding: 5px;\n  display: inline-block;\n  box-shadow: 1px 1px 10px #a4a4a4;\n  text-align: left; }\n  .card__date {\n    font-size: 16px;\n    vertical-align: middle;\n    display: inline-block;\n    margin-top: 8px; }\n  .card__header {\n    padding-bottom: 5px;\n    padding-left: 15px; }\n    .card__header:after {\n      content: '';\n      display: table;\n      clear: both; }\n  .card__content {\n    background: #fff;\n    border-radius: 10px;\n    padding: 20px;\n    width: 100%; }\n  .card__add {\n    vertical-align: middle;\n    float: right;\n    padding: 5px;\n    border-radius: 5px;\n    border: none;\n    padding: 3px 12px;\n    font-size: 29px;\n    line-height: 1;\n    color: #fff;\n    cursor: pointer;\n    transition: 0.3s;\n    background: transparent; }\n    .card__add:hover, .card__add:focus {\n      outline: none;\n      background: rgba(0, 0, 0, 0.14); }\n\n.item {\n  display: block;\n  position: relative;\n  margin: 15px 0;\n  border-radius: 10px; }\n  .item__title {\n    display: inline-block;\n    padding: 5px 25px;\n    border-radius: 10px;\n    position: absolute; }\n  .item__price {\n    background: linear-gradient(to right, rgba(255, 255, 255, 0.63) 0%, rgba(255, 255, 255, 0.39) 99%);\n    display: inline-block;\n    float: none;\n    width: 100%;\n    text-align: right;\n    padding: 5px 15px;\n    margin-right: 15px; }\n\n.form {\n  transition: 0.5s;\n  overflow: hidden; }\n  .form_hidden {\n    max-height: 0; }\n  .form_open {\n    max-height: 125px; }\n  .form__title {\n    padding: 0 10px;\n    width: 100%;\n    margin-top: 10px;\n    border-radius: 5px;\n    background: transparent;\n    border: 1px solid #c1c1c1;\n    height: 26px; }\n    .form__title:hover, .form__title:focus {\n      outline: none; }\n  .form__price {\n    padding: 0 10px;\n    width: 100%;\n    margin-top: 10px;\n    border-radius: 5px;\n    background: transparent;\n    border: 1px solid #c1c1c1;\n    height: 26px; }\n    .form__price:hover, .form__price:focus {\n      outline: none; }\n  .form__add {\n    margin-top: 10px;\n    width: 100%;\n    background: #a4e47d;\n    border: none;\n    border-radius: 5px;\n    color: #fff;\n    font-size: 24px;\n    line-height: 1;\n    transition: 0.3s;\n    cursor: pointer; }\n    .form__add:hover, .form__add:focus {\n      outline: none;\n      background: #86db53; }\n\n.modal {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.49);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.modal__body {\n  width: 600px;\n  margin: 0 auto;\n  background: linear-gradient(128deg, #26a65b 11%, #d18b36 24%, #fa9300 33%, #d18b36 42%, #007bff 63%, #da3055 91%);\n  margin-top: 100px;\n  padding: 5px;\n  border-radius: 10px; }\n", ""]);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_addons_update__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_addons_update___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_addons_update__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Container__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Modal__ = __webpack_require__(87);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var data = [{
    id: '' + Math.round(Math.random() * 1000000),
    date: '11.05.2017',
    items: [{
        id: '' + Math.round(Math.random() * 1000000),
        title: 'Lorem',
        price: 600
    }, {
        id: '' + Math.round(Math.random() * 1000000),
        title: 'Ipsum',
        price: 100
    }, {
        id: '' + Math.round(Math.random() * 1000000),
        title: 'Dolore',
        price: 6000
    }]
}, {
    id: '' + Math.round(Math.random() * 1000000),
    date: '11.05.2017',
    items: [{
        id: '' + Math.round(Math.random() * 1000000),
        title: 'Lorem',
        price: 600
    }, {
        id: '' + Math.round(Math.random() * 1000000),
        title: 'Ipsum',
        price: 100
    }, {
        id: '' + Math.round(Math.random() * 1000000),
        title: 'Dolore',
        price: 6000
    }]
}, {
    id: '' + Math.round(Math.random() * 1000000),
    date: '11.05.2017',
    items: [{
        id: '' + Math.round(Math.random() * 1000000),
        title: 'Lorem',
        price: 600
    }, {
        id: '' + Math.round(Math.random() * 1000000),
        title: 'Ipsum',
        price: 100
    }, {
        id: '' + Math.round(Math.random() * 1000000),
        title: 'Dolore',
        price: 6000
    }]
}, {
    id: '' + Math.round(Math.random() * 1000000),
    date: '11.05.2017',
    items: [{
        id: '' + Math.round(Math.random() * 1000000),
        title: 'Lorem',
        price: 600
    }, {
        id: '' + Math.round(Math.random() * 1000000),
        title: 'Ipsum',
        price: 100
    }, {
        id: '' + Math.round(Math.random() * 1000000),
        title: 'Dolore',
        price: 6000
    }]
}, {
    id: '' + Math.round(Math.random() * 1000000),
    date: '11.05.2017',
    items: [{
        id: '' + Math.round(Math.random() * 1000000),
        title: 'Lorem',
        price: 600
    }, {
        id: '' + Math.round(Math.random() * 1000000),
        title: 'Ipsum',
        price: 100
    }, {
        id: '' + Math.round(Math.random() * 1000000),
        title: 'Dolore',
        price: 6000
    }]
}, {
    id: '' + Math.round(Math.random() * 1000000),
    date: '11.05.2017',
    items: [{
        id: '' + Math.round(Math.random() * 1000000),
        title: 'Lorem',
        price: 600
    }, {
        id: '' + Math.round(Math.random() * 1000000),
        title: 'Ipsum',
        price: 100
    }, {
        id: '' + Math.round(Math.random() * 1000000),
        title: 'Dolore',
        price: 6000
    }]
}];

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            cards: data
        };
        _this.deleteItem = _this.deleteItem.bind(_this);

        return _this;
    }

    _createClass(App, [{
        key: 'deleteItem',
        value: function deleteItem(evt) {
            var elemId = evt.target.parentElement.id;
            var cardId = evt.target.closest('.card').id;
        }
    }, {
        key: 'render',
        value: function render() {

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'App' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('header', { className: 'header' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Container__["a" /* default */], { onDeleteItem: this.deleteItem, cards: this.state.cards }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Modal__["a" /* default */], null)
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(190)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(34, function() {
			var newContent = __webpack_require__(34);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Card = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card() {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    _createClass(Card, [{
        key: 'render',
        value: function render() {

            var items = this.props.items.map(function (item) {
                var number = Math.round(Math.random() * 4);
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'item color_' + number + '', key: item.id, id: item.id },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'item__title color_' + number + '' },
                        item.title
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'item__price' },
                        item.price
                    )
                );
            });

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: "card color_" + Math.round(Math.random() * 4) + "", ref: 'card', id: this.props.id },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card__header' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'card__date' },
                        this.props.date
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { onClick: this.handleClick, className: 'card__add' },
                        '+'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card__content' },
                    items
                )
            );
        }
    }]);

    return Card;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Card__ = __webpack_require__(85);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Container = function (_React$Component) {
    _inherits(Container, _React$Component);

    function Container() {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
    }

    _createClass(Container, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var Cards = this.props.cards.map(function (item) {

                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Card__["a" /* default */], { onDeleteItem: _this2.props.onDeleteItem, id: item.id, date: item.date, items: item.items, key: item.id });
            });

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'container' },
                Cards
            );
        }
    }]);

    return Container;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal() {
        _classCallCheck(this, Modal);

        return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
    }

    _createClass(Modal, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'modal' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'modal__body' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { className: 'modal__add' },
                        '+'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { className: 'modal__close' },
                        '+'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'modal__content' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', clasName: 'modal__input' }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'modal-marks_default' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'mark mark_default' },
                                '\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B'
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'modal-marks_undefault' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'mark mark_undefault' },
                                '\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'add-mark' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'add-mark__label' },
                                    '+'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'add-mark__input' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Modal;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Modal);

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_App__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_app_scss__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scss_app_scss__);





// console.log(document.getElementById('root'));
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_App__["a" /* default */], null), document.getElementById('root'));

/***/ })

},[88]);
//# sourceMappingURL=app.js.map