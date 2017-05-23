webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/spinner.gif";

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Container__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_actions__ = __webpack_require__(25);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            openModal: false,
            dayId: ''
        };
        return _this;
    }

    _createClass(App, [{
        key: 'openModal',
        value: function openModal(id) {
            this.setState({ openModal: true, dayId: id });
            document.body.classList.add('open-modal');
            this.props.getmarks();
        }
    }, {
        key: 'closeModal',
        value: function closeModal() {
            this.setState({ openModal: false });
            document.body.classList.remove('open-modal');
        }
    }, {
        key: 'getmarks',
        value: function getmarks() {
            this.props.getmarks();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getdays();
        }
    }, {
        key: 'render',
        value: function render() {

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'App' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('header', { className: 'header' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Container__["a" /* default */], { openModal: this.openModal.bind(this), cards: this.props.days }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Modal__["a" /* default */], {
                    dayId: this.state.dayId,
                    addmark: this.props.addmark,
                    marks: this.props.marks,
                    getmarks: this.getmarks.bind(this),
                    open: this.state.openModal,
                    closeModal: this.closeModal.bind(this),
                    updatelist: this.props.updatelist
                })
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getdays: function getdays() {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__redux_actions__["a" /* action_getdays */])());
        },
        getmarks: function getmarks() {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__redux_actions__["b" /* action_getmarks */])());
        },
        addmark: function addmark(title) {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__redux_actions__["c" /* action_addmark */])(title));
        },
        updatelist: function updatelist(data) {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__redux_actions__["d" /* action_updatelist */])(data));
        }
    };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(function (state) {
    return { days: state.days, marks: state.marks };
}, mapDispatchToProps)(App));

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(243)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(37, function() {
			var newContent = __webpack_require__(37);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Item__ = __webpack_require__(105);
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
        key: 'openModal',
        value: function openModal() {

            this.props.openModal(this.props.id);
        }
    }, {
        key: 'render',
        value: function render() {

            var items = this.props.items.map(function (item) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Item__["a" /* default */], { number: Math.round(Math.random() * 4), price: item.price, title: item.title, key: item._id });
            });

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: "card color_" + this.props.number + "", ref: 'card', id: this.props.id },
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
                        { onClick: this.openModal.bind(this), className: 'card__add' },
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

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Card__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_spinner_gif__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_spinner_gif___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_spinner_gif__);
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

            var Cards = this.props.cards == 'loading' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_3__assets_spinner_gif___default.a }) : this.props.cards.map(function (item) {

                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Card__["a" /* default */], { number: Math.round(Math.random() * 4), openModal: _this2.props.openModal, onDeleteItem: _this2.props.onDeleteItem, id: item.id, date: item.date, items: item.items, key: item.id });
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

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Item = function (_React$Component) {
    _inherits(Item, _React$Component);

    function Item() {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    _createClass(Item, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'item color_' + this.props.number + '' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'item__title color_' + this.props.number + '' },
                    this.props.title
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'item__price' },
                    this.props.price
                )
            );
        }
    }]);

    return Item;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Item);

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_spinner_gif__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_spinner_gif___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_spinner_gif__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal() {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

        _this.state = {
            addMarkOpen: false,
            addMarkValue: '',
            priceValue: '',
            priceValid: '',
            buttonValid: '',
            activeButton: '',
            hintActive: false,
            errorMessage: ''
        };
        return _this;
    }

    _createClass(Modal, [{
        key: 'handleClick',
        value: function handleClick(evt) {

            this.setState({ addMarkOpen: !this.state.addMarkOpen });
            if (this.state.addMarkOpen == false) {
                document.getElementsByClassName('add-mark__input')[0].focus();
            }
        }
    }, {
        key: 'closeModal',
        value: function closeModal(evt) {
            if (evt == "custom" || evt.target.classList.contains('modal') || evt.target.classList.contains('modal__close')) {
                this.setState({ priceValue: '' });
                this.setState({ activeButton: '' });

                this.props.closeModal();
            }
        }
    }, {
        key: 'priceChange',
        value: function priceChange(evt) {
            var val = evt.target.value;
            if (/^\d+$/.test(val) || val == "") {
                this.setState({ priceValue: val });
            }
            if (this.state.priceValue != '') {
                this.setState({ priceValid: 'valid' });
            }
        }
    }, {
        key: 'openHint',
        value: function openHint() {
            this.setState({ hintActive: true });
        }
    }, {
        key: 'closeHint',
        value: function closeHint() {
            this.setState({ hintActive: false });
        }
    }, {
        key: 'addMarkChange',
        value: function addMarkChange(evt) {
            this.setState({ addMarkValue: evt.target.value });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(evt) {
            var _this2 = this;

            evt.preventDefault();
            var search = this.props.marks.unDefaults.filter(function (item) {
                return item.title == _this2.state.addMarkValue;
            });
            if (!search.length) {
                this.props.addmark(this.state.addMarkValue);
                this.setState({ addMarkOpen: false });
                this.setState({ addMarkValue: '' });
            }
        }
    }, {
        key: 'formSubmit',
        value: function formSubmit() {
            var data = {};

            if (this.state.priceValue == '') {
                this.setState({ priceValid: 'invalid' });

                this.setState({ errorMessage: 'Введите стоимость покупки!' });
            }
            if (this.state.activeButton == '') {
                this.setState({ buttonValid: 'invalid' });

                this.setState({ errorMessage: 'Выберите раздел!' });
            }
            if (this.state.priceValue == '' && this.state.activeButton == '') {
                this.setState({ errorMessage: 'Введите стоимость покупки и выберите раздел!' });
            }
            if (this.state.priceValue != '' && this.state.activeButton != '') {
                this.setState({ errorMessage: '' });

                data = {
                    id: this.props.dayId,
                    price: this.state.priceValue,
                    title: this.state.activeButton
                };
                this.props.updatelist(data);
                this.closeModal('custom');
            }
        }
    }, {
        key: 'toggleClassActive',
        value: function toggleClassActive(evt) {
            this.setState({ addMarkValue: '' });
            this.setState({ addMarkOpen: false });
            this.setState({ activeButton: evt.target.innerHTML });
            var items = document.getElementsByClassName('mark');
            for (var i = 0; i < items.length; i++) {
                items[i].classList.remove('mark_active');
            }
            evt.target.classList.add('mark_active');
            if (this.state.activeButton != '') {
                this.setState({ buttonValid: 'valid' });
                this.setState({ errorMessage: '' });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var marks;
            if (this.props.open) {
                marks = this.props.marks == 'loading' || typeof this.props.marks.defaults == 'undefined' || typeof this.props.marks == 'undefined' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_1__assets_spinner_gif___default.a }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'modal__marks' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'modal__marks modal__marks_default' },
                        this.props.marks.defaults.map(function (item) {
                            var number = 4;
                            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'button',
                                { key: item.id, className: "mark mark_default color_" + number, onClick: _this3.toggleClassActive.bind(_this3) },
                                item.title
                            );
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'modal__marks modal__marks_undefault' },
                        this.props.marks.unDefaults.map(function (item) {

                            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'button',
                                { onClick: _this3.toggleClassActive.bind(_this3), key: item.id, className: 'mark mark_undefault' },
                                item.title
                            );
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { onMouseEnter: this.openHint.bind(this), onMouseLeave: this.closeHint.bind(this),
                                className: this.state.addMarkOpen ? 'add-mark add-mark_active mark' : 'mark add-mark' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'add-mark__label',
                                    onClick: this.handleClick.bind(this) },
                                '+'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'form',
                                { id: 'addMark', onSubmit: this.handleSubmit.bind(this) },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'add-mark__input', size: '1', onChange: this.addMarkChange.bind(this), value: this.state.addMarkValue })
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: this.state.hintActive ? 'hint hint_active' : 'hint' },
                            '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 \u043F\u043E\u043B\u0435, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B'
                        )
                    )
                );
            }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { onClick: this.closeModal.bind(this), className: this.props.open ? 'modal modal_open' : 'modal' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'modal__body' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { className: 'modal__add', onClick: this.formSubmit.bind(this) },
                        '+'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'modal__close', onClick: this.closeModal.bind(this) },
                        '+'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'modal__content' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                            type: 'text',
                            className: 'modal__input',
                            placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 \u043F\u043E\u043A\u0443\u043F\u043A\u0438',
                            onChange: this.priceChange.bind(this),
                            value: this.state.priceValue }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'modal__error' },
                            this.state.errorMessage
                        ),
                        marks
                    )
                )
            );
        }
    }]);

    return Modal;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Modal);

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_App__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scss_app_scss__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scss_app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__scss_app_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_store__ = __webpack_require__(56);







__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_react_redux__["Provider"],
    { store: __WEBPACK_IMPORTED_MODULE_5__redux_store__["a" /* default */] },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_App__["a" /* default */], null)
), document.getElementById('root'));

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var middleware = function middleware(store) {
    return function (next) {
        return function (action) {
            if (action.type !== 'PROMISE' && action.type !== 'PROMISE_DATA') {
                return next(action);
            }

            var _action$actions = _slicedToArray(action.actions, 3),
                startAction = _action$actions[0],
                successAction = _action$actions[1],
                failureAction = _action$actions[2];

            store.dispatch({
                type: startAction,
                payload: 'loading'
            });

            if (action.type == 'PROMISE_DATA') {

                return action.promise(action.data).then(function (dataf) {

                    return store.dispatch({
                        type: successAction,
                        data: dataf
                    });

                    (function (error) {
                        return store.dispatch({
                            type: failureAction,
                            error: error
                        });
                    });
                });
            } else if (action.type == 'PROMISE') {
                return action.promise().then(function (data) {
                    return store.dispatch({
                        type: successAction,
                        data: data
                    }), function (error) {
                        return store.dispatch({
                            type: failureAction,
                            error: error
                        });
                    };
                });
            }
        };
    };
};

/* harmony default export */ __webpack_exports__["a"] = (middleware);

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(56);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'GET_DAYS_START':
            return action.payload;
        case 'GET_DAYS_FINISH':
            return [].concat(_toConsumableArray(action.data));
        case 'UPDATELIST_FINISH':
            var g = state.concat();
            var h = state.findIndex(function (item) {
                return item.id == action.data.id;
            });
            g.splice(h, 1, action.data);

            return g;
        default:
            return state;
    }
}

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__days__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__marks__ = __webpack_require__(111);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "days", function() { return __WEBPACK_IMPORTED_MODULE_0__days__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "marks", function() { return __WEBPACK_IMPORTED_MODULE_1__marks__["a"]; });






/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case 'GET_MARKS_START':
            return action.payload;
        case 'GET_MARKS_FINISH':
            return _extends({}, action.data);
        case 'ADD_MARK_START':
            return state;
        case 'ADD_MARK_ERROR':
            console.log(action.error);
            return state;
        case 'ADD_MARK_FINISH':
            console.log('REDUCER', state);

            return _extends({}, state, {
                unDefaults: [].concat(_toConsumableArray(state.unDefaults), [action.data])

            });

        default:
            return state;
    }
}

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = action_updatelist;
/* harmony export (immutable) */ __webpack_exports__["a"] = action_getdays;
/* harmony export (immutable) */ __webpack_exports__["b"] = action_getmarks;
/* harmony export (immutable) */ __webpack_exports__["c"] = action_addmark;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(26);





function action_updatelist(data) {
    return { type: 'PROMISE_DATA', promise: __WEBPACK_IMPORTED_MODULE_0__api__["a" /* updatelist */], data: data, actions: ['UPDATELIST_START', 'UPDATELIST_FINISH', 'UPDATELIST_ERROR'] };
}

function action_getdays() {
    return { type: 'PROMISE', promise: __WEBPACK_IMPORTED_MODULE_0__api__["b" /* getdays */], actions: ['GET_DAYS_START', 'GET_DAYS_FINISH', 'GET_DAYS_ERROR'] };
}
function action_getmarks() {
    return { type: 'PROMISE', promise: __WEBPACK_IMPORTED_MODULE_0__api__["c" /* getmarks */], actions: ['GET_MARKS_START', 'GET_MARKS_FINISH', 'GET_MARKS_ERROR'] };
}

function action_addmark(title) {
    return { type: 'PROMISE_DATA', promise: __WEBPACK_IMPORTED_MODULE_0__api__["d" /* addmark */], data: title, actions: ['ADD_MARK_START', 'ADD_MARK_FINISH', 'ADD_MARK_ERROR'] };
}

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getdays;
/* harmony export (immutable) */ __webpack_exports__["c"] = getmarks;
/* harmony export (immutable) */ __webpack_exports__["a"] = updatelist;
/* harmony export (immutable) */ __webpack_exports__["d"] = addmark;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);


function returnData(data) {
    return data;
}

function getdays() {
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('api/getdays').then(function (data) {
        return data.json();
    });
}

function getmarks() {
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('api/getmarks').then(function (data) {
        return data.json();
    });
}

function updatelist(data) {

    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('/api/updatelist/' + data.id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: data.title,
            price: +data.price
        })
    }).then(function (data) {
        return data.json();
    });
}

function addmark(title) {
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('/api/addmark', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            defaultItem: false
        })
    }).then(function (data) {
        return data.json();
    });
}

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(112)();
exports.push([module.i, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n/**\r\n * 1. Change the default font family in all browsers (opinionated).\r\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\r\n * Remove the margin in all browsers (opinionated).\r\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Add the correct display in IE 9-.\r\n * 1. Add the correct display in Edge, IE, and Firefox.\r\n * 2. Add the correct display in IE.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  /* 1 */\n  display: block; }\n\n/**\r\n * Add the correct display in IE 9-.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; }\n\n/**\r\n * Add the correct display in iOS 4-7.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\r\n * Add the correct display in IE 10-.\r\n * 1. Add the correct display in IE.\r\n */\ntemplate,\n[hidden] {\n  display: none; }\n\n/* Links\r\n   ========================================================================== */\n/**\r\n * 1. Remove the gray background on active links in IE 10.\r\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\r\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\r\n * Remove the outline on focused links when they are also active or hovered\r\n * in all browsers (opinionated).\r\n */\na:active,\na:hover {\n  outline-width: 0; }\n\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * 1. Remove the bottom border in Firefox 39-.\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\r\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\r\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\r\n * Add the correct font style in Android 4.3-.\r\n */\ndfn {\n  font-style: italic; }\n\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\r\n * Add the correct background and color in IE 9-.\r\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\r\n * Add the correct font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove the border on images inside links in IE 10-.\r\n */\nimg {\n  border-style: none;\n  max-width: 100%; }\n\n/**\r\n * Hide the overflow in IE.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\r\n * Add the correct margin in IE 8.\r\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/* Forms\r\n   ========================================================================== */\n/**\r\n * 1. Change font properties to `inherit` in all browsers (opinionated).\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\r\n * Restore the font weight unset by the previous rule.\r\n */\noptgroup {\n  font-weight: bold; }\n\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\r\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\r\n *    controls in Android 4.\r\n * 2. Correct the inability to style clickable types in iOS and Safari.\r\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\r\n * Change the border, margin, and padding in all browsers (opinionated).\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\r\n * Remove the default vertical scrollbar in IE.\r\n */\ntextarea {\n  overflow: auto;\n  resize: none; }\n\n/**\r\n * 1. Add the correct box sizing in IE 10-.\r\n * 2. Remove the padding in IE 10-.\r\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\r\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\r\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\r\n */\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54; }\n\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box; }\n\nsvg {\n  max-width: 100%; }\n\n/**\r\n * Hack to remove Chrome's yellow background on autofilling inputs\r\n */\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  transition: background-color 500000s ease-in-out 0s, color 500000s ease-in-out 0s; }\n\n/**\r\n * Fix for IE select bars\r\n */\nselect::-ms-value,\nselect:focus::-ms-value {\n  background: none; }\n\ntable {\n  border-collapse: collapse; }\n\np {\n  margin: 0 0 1em 0; }\n\nbody {\n  background: #f5f5f5;\n  color: #252525;\n  font-family: 'Roboto', sans-serif; }\n\nbody.open-modal {\n  overflow: hidden; }\n\n.container {\n  max-width: 1170px;\n  margin: 0 auto;\n  text-align: center; }\n  @media (max-width: 768px) {\n    .container {\n      width: 100%; } }\n\n.header {\n  background: #26a65b;\n  background: linear-gradient(to right, #26a65b 0%, #d18b36 20%, #fa9300 33%, #d18b36 45%, #017cff 71%, #b45469 99%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#26a65b', endColorstr='#b45469', GradientType=1);\n  height: 50px; }\n\n.color_0 {\n  background-color: #bca2e0; }\n\n.color_1 {\n  background-color: #d6675b; }\n\n.color_2 {\n  background-color: #ffd68f; }\n\n.color_3 {\n  background-color: #86d8a3; }\n\n.color_4 {\n  background-color: #94bcda; }\n\n.card {\n  color: #fff;\n  border-radius: 10px;\n  vertical-align: top;\n  width: 600px;\n  margin: 15px 0;\n  padding: 5px;\n  display: inline-block;\n  box-shadow: 1px 1px 10px #a4a4a4;\n  text-align: left; }\n  @media (max-width: 768px) {\n    .card {\n      width: 100%; } }\n  .card__date {\n    font-size: 16px;\n    vertical-align: middle;\n    display: inline-block;\n    margin-top: 8px; }\n  .card__header {\n    padding-bottom: 5px;\n    padding-left: 15px; }\n    .card__header:after {\n      content: '';\n      display: table;\n      clear: both; }\n  .card__content {\n    background: #fff;\n    border-radius: 10px;\n    padding: 20px;\n    width: 100%; }\n  .card__add {\n    vertical-align: middle;\n    float: right;\n    padding: 5px;\n    border-radius: 5px;\n    border: none;\n    padding: 3px 12px;\n    font-size: 29px;\n    line-height: 1;\n    color: #fff;\n    cursor: pointer;\n    transition: 0.3s;\n    background: transparent; }\n    .card__add:hover, .card__add:focus {\n      outline: none;\n      background: rgba(0, 0, 0, 0.14); }\n\n.item {\n  display: block;\n  position: relative;\n  margin: 15px 0;\n  border-radius: 10px; }\n  .item__title {\n    display: inline-block;\n    padding: 5px 25px;\n    border-radius: 10px;\n    position: absolute;\n    min-width: 130px;\n    text-align: center; }\n  .item__price {\n    background: linear-gradient(to right, rgba(255, 255, 255, 0.63) 0%, rgba(255, 255, 255, 0.39) 99%);\n    display: inline-block;\n    float: none;\n    width: 100%;\n    text-align: right;\n    padding: 5px 15px;\n    margin-right: 15px; }\n\n.form {\n  transition: 0.5s;\n  overflow: hidden; }\n  .form_hidden {\n    max-height: 0; }\n  .form_open {\n    max-height: 125px; }\n  .form__title {\n    padding: 0 10px;\n    width: 100%;\n    margin-top: 10px;\n    border-radius: 5px;\n    background: transparent;\n    border: 1px solid #c1c1c1;\n    height: 26px; }\n    .form__title:hover, .form__title:focus {\n      outline: none; }\n  .form__price {\n    padding: 0 10px;\n    width: 100%;\n    margin-top: 10px;\n    border-radius: 5px;\n    background: transparent;\n    border: 1px solid #c1c1c1;\n    height: 26px; }\n    .form__price:hover, .form__price:focus {\n      outline: none; }\n  .form__add {\n    margin-top: 10px;\n    width: 100%;\n    background: #a4e47d;\n    border: none;\n    border-radius: 5px;\n    color: #fff;\n    font-size: 24px;\n    line-height: 1;\n    transition: 0.3s;\n    cursor: pointer; }\n    .form__add:hover, .form__add:focus {\n      outline: none;\n      background: #86db53; }\n\n.modal {\n  position: fixed;\n  background: rgba(0, 0, 0, 0.49);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  max-height: 0;\n  overflow: hidden;\n  transition: 0.3s; }\n  .modal__error {\n    display: block;\n    color: #f91f1f;\n    font-weight: 600;\n    text-align: center;\n    height: 20px;\n    margin-top: 5px; }\n  .modal_open {\n    max-height: 100%; }\n  .modal__body {\n    max-width: 600px;\n    margin: 0 auto;\n    background: linear-gradient(128deg, #26a65b 11%, #d18b36 24%, #fa9300 33%, #d18b36 42%, #007bff 63%, #da3055 91%);\n    margin-top: 100px;\n    padding: 5px;\n    position: relative;\n    border-radius: 10px; }\n    @media (max-width: 768px) {\n      .modal__body {\n        width: 100%; } }\n  .modal__content {\n    background: #fff;\n    padding: 10px 10px;\n    border-radius: 10px; }\n  .modal__add {\n    background: rgba(0, 0, 0, 0.14);\n    border: none;\n    color: #fff;\n    line-height: 1;\n    font-size: 29px;\n    border-radius: 10px;\n    padding: 2px 12px;\n    margin-left: 10px;\n    transition: 0.3s;\n    cursor: pointer;\n    margin-bottom: 4px; }\n    .modal__add:hover {\n      background: rgba(0, 0, 0, 0.24); }\n  .modal__close {\n    position: absolute;\n    right: 0;\n    top: 0;\n    background: #fff;\n    border: 1px solid #000;\n    border-radius: 50%;\n    -ms-transform: rotate(45deg) translate(0, -50%);\n        transform: rotate(45deg) translate(0, -50%);\n    padding: 3px 10px 4px;\n    line-height: 1;\n    font-size: 35px;\n    cursor: pointer;\n    transition: 0.3s;\n    cursor: pointer; }\n    @media (max-width: 768px) {\n      .modal__close {\n        -ms-transform: rotate(45deg) translate(0, 0%);\n            transform: rotate(45deg) translate(0, 0%); } }\n  .modal__marks {\n    padding: 5px 10px 20px; }\n    .modal__marks_undefault {\n      border-top: solid 2px #757575; }\n  .modal__input {\n    width: 100%;\n    border: transparent;\n    border-bottom: 2px solid #757575;\n    height: 40px;\n    text-align: center;\n    font-size: 31px;\n    color: #757575; }\n    @media (max-width: 768px) {\n      .modal__input {\n        font-size: 20px; } }\n    .modal__input:focus {\n      outline: none; }\n\n@keyframes funbutton {\n  0% {\n    transform: scale(1); }\n  50% {\n    transform: scale(1.1); }\n  100% {\n    transform: scale(1); } }\n\n.mark {\n  display: inline-block;\n  padding: 6px 6px;\n  border-radius: 6px;\n  color: #fff;\n  min-width: 23%;\n  text-align: center;\n  line-height: 1;\n  border: none;\n  cursor: pointer;\n  margin: 3px 1%;\n  font-size: 16px;\n  transition: 0.3s; }\n  @media (max-width: 768px) {\n    .mark {\n      font-size: 12px;\n      min-width: 31%; } }\n  .mark_active {\n    box-shadow: 3px 1px 8px #30884a;\n    animation: funbutton 0.5s; }\n  .mark:focus {\n    outline: none; }\n  .mark_undefault {\n    background: #929292; }\n\n.add-mark {\n  margin: 3px 1%;\n  display: inline-block;\n  background: #26a65b;\n  color: #fff;\n  line-height: 1;\n  padding: 4px;\n  border-radius: 5px;\n  min-width: 23%;\n  text-align: center;\n  overflow: hidden;\n  vertical-align: top;\n  height: 27px;\n  cursor: pointer;\n  transition: 0.3s; }\n  @media (max-width: 768px) {\n    .add-mark {\n      min-width: 31%; } }\n  .add-mark_active {\n    height: 52px;\n    max-width: 100%; }\n  .add-mark__label {\n    padding-bottom: 4px;\n    font-size: 20px;\n    line-height: 1; }\n  .add-mark .add-mark__input {\n    width: 100%;\n    border: none;\n    border-radius: 7px;\n    height: 20px;\n    padding: 0 5px; }\n\n.hint {\n  display: block;\n  background: #adadad;\n  color: #fff;\n  padding: 0 15px;\n  border-radius: 10px;\n  opacity: 0;\n  transition: 0.3s; }\n  .hint_active {\n    opacity: 1; }\n", ""]);

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__middlewares_promises__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_logger__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(110);





var createStoreWithMiddleware = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1__middlewares_promises__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"]);

var reducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(__WEBPACK_IMPORTED_MODULE_3__reducers__);

var store = createStoreWithMiddleware(reducer, {
    days: [],
    marks: {}
});

store.subscribe(function () {
    return console.log('store', store.getState());
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ })

},[107]);
//# sourceMappingURL=app.js.map