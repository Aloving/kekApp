webpackJsonp([0],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sidebar__ = __webpack_require__(150);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'wrapper' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Sidebar__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'main' },
                    this.props.children
                )
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (App);

// div#root {
//     max-width: 992px;
//     margin: 0 auto;
// }

// .sidebar {
//     width: 100px;
//     display: inline-block;
//     height: 100%;
//     background: #25ba9a;
//     padding: 0;
//     position: fixed;
// }

// .home {}

// .home {
//     display: inline-block;
//     width: calc(100% - 100px);
//     vertical-align: top;
// }

// .container {
//     margin: 0;
//     text-align: left;
//     max-width: none;
//     padding-left: 30px;
// }

// a.nav-item {
//     padding: 10px 0;
//     width: 106px;
//     /* height: 100px; */
//     background: transparent;
//     border-radius: 0 5px 5px 0;
// }


// nav-item:before {}

// a.nav-item.nav-item_active {
//     background: #088a6e;
// }

// a.nav-item.nav-item_active:after {
//     width: 0;
//     content: '';
//     background: transparent;
//     height: 0;
//     right: -18px;
//     left: auto;
//     position: absolute;
//     top: calc(50% - 10px);
//     border: 10px solid transparent;
//     border-radius: 0;
//     border-left: #088a6e 8px solid;
// }

// .nav-item:after {
//     content: '';
// }

// .card {
//     background: transparent;
//     box-shadow: none;
//     padding: 0;
// }

// .card__header {
//     /* padding-left: 0; */
//     background: #25ba9a;
// }

// .card__content {
//     background: transparent;
//     padding: 0;
// }

// .item {
//     background: transparent;
//     color: #25ba9a;
// }

// span.item__title {
//     background: transparent;
// }

// .item_total.item.col {}

// span.item__price {
//     background: transparent;
// }

// .item {
//     border: solid 2px #25ba9a;
//     border-radius: 3px;
//     padding: 2px 0;
// }

// .container {
//     padding-left: 147px;
// }

// .card__header {
//     border-radius: 3px;
// }

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_ghost_png__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_ghost_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_ghost_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_actions__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_addons_css_transition_group__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_addons_css_transition_group__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var StateObject = {
    minDate: { year: 0, month: 0 },
    dateNow: { year: 0, month: 0 },
    startDays: [],
    months: {},
    currentYear: 0,
    currentMonth: 0
};

var currentDate = function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    StateObject.dateNow = { year: year, month: month };
    var dayInMonth = 32 - new Date(year, month, 32).getDate();
    for (var i = 0; i < dayInMonth; i++) {
        StateObject.startDays.push(null);
    }
    StateObject.currentYear = year;
    StateObject.currentMonth = month;
}();

// currentDate();

var Calendar = function (_React$Component) {
    _inherits(Calendar, _React$Component);

    function Calendar() {
        _classCallCheck(this, Calendar);

        var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this));

        _this.state = {
            visibleDays: [],
            arrowPrevActive: true,
            arrowNextActive: false
        };

        _this.dateToString = _this.dateToString.bind(_this);
        _this.filterDays = _this.filterDays.bind(_this);
        _this.minMax = _this.minMax.bind(_this);
        return _this;
    }

    _createClass(Calendar, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.getcalendar();
            document.title = "Календарь";
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (_typeof(this.props.calendar) == 'object' && this.props.calendar.length) {
                if (StateObject.minDate.year == 0) {
                    this.minMax();
                }
                this.state.visibleDays.length == 0 ? this.filterDays(StateObject.dateNow.year, StateObject.dateNow.month) : null;
            }

            StateObject.currentMonth = StateObject.dateNow.month;
            StateObject.currentYear = StateObject.dateNow.year;
        }
    }, {
        key: 'minMax',
        value: function minMax() {

            var minYear = Math.min.apply(Math, this.props.calendar.map(function (item) {
                return item.date.year;
            }));
            var minYearMonths = this.props.calendar.filter(function (item) {
                return item.date.year == minYear;
            });
            var minMonth = Math.min.apply(Math, minYearMonths.map(function (item) {
                return item.date.month;
            }));
            StateObject.minDate = { year: minYear, month: minMonth };
        }
    }, {
        key: 'dateToString',
        value: function dateToString(month) {
            var monthsArray = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентабрь", "Октябрь", "Ноябрь", "Декабрь"];
            return monthsArray[month];
        }
    }, {
        key: 'filterDays',
        value: function filterDays(year, month) {
            var max = year >= StateObject.dateNow.year && month >= StateObject.dateNow.month ? false : true;
            var min = year <= StateObject.minDate.year && month <= StateObject.minDate.month ? false : true;
            this.setState({ arrowNextActive: max });
            this.setState({ arrowPrevActive: min });

            if (StateObject.months[year + ' ' + month]) {
                this.setState({ visibleDays: StateObject.months[year + ' ' + month] });
            } else {

                var ollDays = [];
                var dayInMonth = 32 - new Date(year, month, 32).getDate();
                for (var i = 0; i < dayInMonth; i++) {
                    ollDays.push(null);
                }

                this.props.calendar.filter(function (item) {
                    return item.date.year == year;
                }).filter(function (item) {
                    return item.date.month == month;
                }).map(function (item) {

                    var index = item.date.day - 1;
                    ollDays.splice(index, 1, item);
                });
                this.setState({ visibleDays: ollDays });

                StateObject.months[year + ' ' + month] = ollDays;
            }
        }
    }, {
        key: 'showPrevMonth',
        value: function showPrevMonth() {
            var year = StateObject.currentYear;
            var month = StateObject.currentMonth;

            if (month == 0) {
                year -= 1;
                month = 11;

                StateObject.currentYear = year;
                StateObject.currentMonth = month;
                this.filterDays(year, month);
            } else {
                month -= 1;
                StateObject.currentMonth = month;
                this.filterDays(year, month);
            }
        }
    }, {
        key: 'showNextMonth',
        value: function showNextMonth() {
            var year = StateObject.currentYear;
            var month = StateObject.currentMonth;
            if (month == 11) {
                year += 1;
                month = 0;

                StateObject.currentYear = year;
                StateObject.currentMonth = month;
                this.filterDays(year, month);
            } else {
                month += 1;
                StateObject.currentMonth = month;
                this.filterDays(year, month);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var counter = 0;
            var daysMap = this.state.visibleDays.length == 0 ? StateObject.startDays : this.state.visibleDays;
            var items = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                daysMap.map(function (item) {
                    counter++;
                    return item == null ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { key: counter, className: 'calendar__link calendar__link_disabled' },
                        counter
                    ) : (typeof item === 'undefined' ? 'undefined' : _typeof(item)) == 'object' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_react_router__["e" /* Link */],
                        { key: item._id, className: 'calendar__link', to: "calendar/day/" + item._id + "" },
                        item.date.day
                    ) : '';
                })
            );

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_addons_css_transition_group___default.a,
                { transitionName: 'animation-opacity',
                    transitionAppear: true,
                    transitionEnterTimeout: 800,
                    transitionLeaveTimeout: 800,
                    transitionAppearTimeout: 800
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], { content: '\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'calendar' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'nav' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { onClick: this.showPrevMonth.bind(this),
                            className: this.state.arrowPrevActive ? "nav__arrow nav__arrow_prev" : "nav__arrow  nav__arrow_disable nav__arrow_prev" }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'nav__text' },
                            this.dateToString(StateObject.currentMonth)
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { onClick: this.showNextMonth.bind(this),
                            className: this.state.arrowNextActive ? "nav__arrow nav__arrow_next" : "nav__arrow  nav__arrow_disable nav__arrow_next" })
                    ),
                    items
                )
            );
        }
    }]);

    return Calendar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getcalendar: function getcalendar() {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__redux_actions__["g" /* action_getcalendar */])());
        }

    };
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(function (state) {
    return { calendar: state.calendar };
}, mapDispatchToProps)(Calendar));

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Container__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_actions__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_addons_css_transition_group__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_addons_css_transition_group__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var counter = 0;

var Day = function (_React$Component) {
    _inherits(Day, _React$Component);

    function Day() {
        _classCallCheck(this, Day);

        var _this = _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).call(this));

        _this.state = {
            openModal: false,
            dayId: '',
            loaded: false

        };
        return _this;
    }

    _createClass(Day, [{
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
        key: 'componentWillMount',
        value: function componentWillMount() {

            this.props.getdayById(this.props.params.dayId);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {

            if (document.title == this.props.day[0].date) {
                return;
            } else if (this.props.day[0].date != undefined) {
                document.title = this.props.day[0].date;
                this.setState({ loaded: true });
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var content = this.state.loaded ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], { content: this.props.day[0].date }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Container__["a" /* default */], { openModal: this.openModal.bind(this), cards: this.props.day, onDeleteItem: this.deleteItem.bind(this) }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Modal__["a" /* default */], {
                    dayId: this.state.dayId,
                    addmark: this.props.addmark,
                    marks: this.props.marks,
                    getmarks: this.props.getmarks,
                    open: this.state.openModal,
                    closeModal: this.closeModal.bind(this),
                    updatelist: this.props.updatelist
                })
            ) : '';

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'day' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_6_react_addons_css_transition_group___default.a,
                    { transitionName: 'animation-opacity',
                        transitionAppear: true,
                        transitionEnterTimeout: 800,
                        transitionLeaveTimeout: 800,
                        transitionAppearTimeout: 800
                    },
                    content
                )
            );
        }
    }]);

    return Day;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getdayById: function getdayById(id) {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__redux_actions__["a" /* action_getdayById */])(id));
        },
        getdays: function getdays() {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__redux_actions__["b" /* action_getdays */])());
        },

        getmarks: function getmarks() {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__redux_actions__["c" /* action_getmarks */])());
        },
        addmark: function addmark(title) {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__redux_actions__["d" /* action_addmark */])(title));
        },
        updatelist: function updatelist(data) {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__redux_actions__["e" /* action_updatelist */])(data));
        },
        deleteItem: function deleteItem(data) {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__redux_actions__["f" /* action_deleteItem */])(data));
        }

    };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(function (state) {
    return { day: state.dayById, marks: state.marks };
}, mapDispatchToProps)(Day));

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Container__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_actions__ = __webpack_require__(41);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

        _this.state = {
            openModal: false,
            dayId: '',
            openModalUpdate: false
        };
        return _this;
    }

    _createClass(Home, [{
        key: 'openModal',
        value: function openModal(data) {
            console.log(data);
            if (data.type == 'update') {
                this.setState({ openModalUpdate: true, dayId: data.id, itemId: data.itemId });
            }
            if (data.type == 'add') {
                this.setState({ openModal: true, dayId: data.id });
            }
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

            document.title = "Главная";
        }
    }, {
        key: 'deleteItem',
        value: function deleteItem(data) {
            this.props.deleteItem(data);
        }
    }, {
        key: 'updateItem',
        value: function updateItem(data) {
            this.props.updateItem(data);
        }
    }, {
        key: 'render',
        value: function render() {

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'home' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], { content: '\u0417\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 7 \u0434\u043D\u0435\u0439' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Container__["a" /* default */], { openModal: this.openModal.bind(this), cards: this.props.days, onDeleteItem: this.deleteItem.bind(this) }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Modal__["a" /* default */], {
                    dayId: this.state.dayId,
                    addmark: this.props.addmark,
                    marks: this.props.marks,
                    getmarks: this.props.getmarks,
                    open: this.state.openModal,
                    closeModal: this.closeModal.bind(this),
                    updatelist: this.props.updatelist,
                    type: 'add'
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Modal__["a" /* default */], {
                    dayId: this.state.dayId,
                    addmark: this.props.addmark,
                    marks: this.props.marks,
                    getmarks: this.props.getmarks,
                    open: this.state.openModalUpdate,
                    closeModal: this.closeModal.bind(this),
                    updateItem: this.props.updateItem,
                    itemId: this.state.itemId,
                    type: 'update'

                })
            );
        }
    }]);

    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        getdays: function getdays() {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__redux_actions__["b" /* action_getdays */])());
        },

        getmarks: function getmarks() {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__redux_actions__["c" /* action_getmarks */])());
        },
        addmark: function addmark(title) {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__redux_actions__["d" /* action_addmark */])(title));
        },
        updatelist: function updatelist(data) {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__redux_actions__["e" /* action_updatelist */])(data));
        },
        deleteItem: function deleteItem(data) {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__redux_actions__["f" /* action_deleteItem */])(data));
        },
        updateItem: function updateItem(data) {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__redux_actions__["i" /* action_updateItem */])(data));
        }

    };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(function (state) {
    return { days: state.days, marks: state.marks };
}, mapDispatchToProps)(Home));

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var NotFound = function (_React$Component) {
    _inherits(NotFound, _React$Component);

    function NotFound() {
        _classCallCheck(this, NotFound);

        return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
    }

    _createClass(NotFound, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            document.title = "Ошибка";
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "error404" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "h1",
                    { className: "error404__title" },
                    "404"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "h3",
                    { className: "error404__description" },
                    "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 :(("
                )
            );
        }
    }]);

    return NotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (NotFound);

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Container__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_actions__ = __webpack_require__(41);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Stat = function (_React$Component) {
    _inherits(Stat, _React$Component);

    function Stat() {
        _classCallCheck(this, Stat);

        return _possibleConstructorReturn(this, (Stat.__proto__ || Object.getPrototypeOf(Stat)).apply(this, arguments));
    }

    _createClass(Stat, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getstat();
            document.title = "Статистика";
        }
    }, {
        key: 'render',
        value: function render() {

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'statistic' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], { content: '\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Container__["a" /* default */], { cards: this.props.stat, stat: true })
            );
        }
    }]);

    return Stat;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {

        getstat: function getstat() {
            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__redux_actions__["h" /* action_getstat */])());
        }

    };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(function (state) {
    return { stat: state.stat };
}, mapDispatchToProps)(Stat));

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__middlewares_promises__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(157);




var createStoreWithMiddleware = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1__middlewares_promises__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"]);

var reducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(__WEBPACK_IMPORTED_MODULE_2__reducers__);

var store = createStoreWithMiddleware(reducer, {
    days: [],
    marks: {},
    stat: [],
    calendar: [],
    dayById: {}

});

store.subscribe(function () {
    return console.log('store', store.getState());
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(318)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(55, function() {
			var newContent = __webpack_require__(55);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Item__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_addons_css_transition_group__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_addons_css_transition_group__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Card = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card() {
        _classCallCheck(this, Card);

        var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));

        _this.state = {
            open: false
        };
        return _this;
    }

    _createClass(Card, [{
        key: 'openModal',
        value: function openModal() {
            this.props.openModal({ id: this.props.id, type: 'add' });
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            this.setState({ open: !this.state.open });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.first) {
                this.setState({ open: true });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var counter = 0;
            var summ = 0;
            this.props.items.map(function (item) {
                summ += item.price;
            });

            var items = this.props.items.map(function (item) {

                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Item__["a" /* default */], { stat: _this2.props.stat,
                    defaultItem: item.defaultItem,
                    percent: _this2.props.stat ? Math.round(item.price / (summ / 100)) : null,
                    price: item.price,
                    title: item.title,
                    onDeleteItem: _this2.props.onDeleteItem,
                    parentId: _this2.props.id,
                    id: item._id,
                    key: _this2.props.id ? item._id : counter++,
                    openModal: _this2.props.openModal
                });
            });
            var total = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Item__["a" /* default */], {
                total: true,
                number: Math.round(Math.random() * 4),
                price: summ,
                title: '\u0412\u0441\u0435\u0433\u043E',
                key: 'total'
            });
            var content;
            if (this.state.open) {

                content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: "card__content" },
                    items,
                    total
                );
            }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: "card", ref: 'card', id: this.props.id },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card__header' },
                    this.props.openModal ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        { onClick: this.openModal.bind(this), className: 'card__add' },
                        '+'
                    ) : null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'card__date' },
                        _typeof(this.props.date) == 'object' ? (this.props.date.month < 10 ? '0' + this.props.date.month : this.props.date.month) + '.' + this.props.date.year : this.props.date
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'button',
                        {
                            onClick: this.toggle.bind(this),
                            className: this.state.open ? 'card__toggle card__toggle_open' : 'card__toggle card__toggle_close' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'card__toggle-icon' })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_react_addons_css_transition_group___default.a,
                    { transitionName: 'toggle',
                        transitionAppear: true,
                        transitionEnterTimeout: 600,
                        transitionLeaveTimeout: 600,
                        transitionAppearTimeout: 600
                    },
                    content
                )
            );
        }
    }]);

    return Card;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_update_svg__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_del_svg__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icon__ = __webpack_require__(81);
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
        key: 'onDeleteItem',
        value: function onDeleteItem(evt) {

            this.item.classList.add('item_leave');
            var self = this;
            setTimeout(function () {
                self.props.onDeleteItem({ dayId: self.props.parentId, itemId: self.props.id });
            }, 300);
        }
    }, {
        key: 'onUpdateItem',
        value: function onUpdateItem() {
            this.props.openModal({ id: this.props.parentId, type: 'update', itemId: this.props.id });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var classNames = [];

            this.props.defaultItem ? classNames.push('item_default') : '';
            this.props.total ? classNames.push('item_total') : '';
            this.props.stat ? classNames.push('item_percent') : '';

            if (this.props.percent) {
                var style = {

                    width: this.props.percent + '%'

                };
            }
            var className = 'item ' + classNames.join(' ');

            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { className: className, ref: function ref(item) {
                        _this2.item = item;
                    } },
                this.props.percent ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('span', { className: 'item__percent', style: style }) : '',
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'span',
                    { className: 'item__price' },
                    this.props.price
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'span',
                    { className: 'item__title' },
                    this.props.title
                ),
                this.props.total || this.props.stat ? '' : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'item__right' },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'span',
                        { onClick: this.onUpdateItem.bind(this), className: this.props.defaultItem ? 'item__update item__update_green' : 'item__update item__update_grey' },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icon__["a" /* default */], { id: __WEBPACK_IMPORTED_MODULE_0__assets_update_svg__["a" /* default */].id })
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'span',
                        { onClick: this.onDeleteItem.bind(this), className: this.props.defaultItem ? 'item__delete item__delete_green' : 'item__delete item__delete_grey' },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Icon__["a" /* default */], { id: __WEBPACK_IMPORTED_MODULE_1__assets_del_svg__["a" /* default */].id })
                    )
                )
            );
        }
    }]);

    return Item;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Item);

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_calendar_svg__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_stat_svg__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_home_svg__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icon__ = __webpack_require__(81);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Sidebar = function (_React$Component) {
    _inherits(Sidebar, _React$Component);

    function Sidebar() {
        _classCallCheck(this, Sidebar);

        return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
    }

    _createClass(Sidebar, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'sidebar' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["f" /* IndexLink */],
                    { activeClassName: 'nav-item_active', className: 'nav-item', to: '/' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'nav-item__img nav-item__img_home' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Icon__["a" /* default */], { id: __WEBPACK_IMPORTED_MODULE_4__assets_home_svg__["a" /* default */].id })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["e" /* Link */],
                    { activeClassName: 'nav-item_active', className: 'nav-item', to: '/calendar' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'nav-item__img nav-item__img_calendar' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Icon__["a" /* default */], { id: __WEBPACK_IMPORTED_MODULE_2__assets_calendar_svg__["a" /* default */].id })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["e" /* Link */],
                    { activeClassName: 'nav-item_active', className: 'nav-item', to: '/stat' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'nav-item__img nav-item__img_stat ' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Icon__["a" /* default */], { id: __WEBPACK_IMPORTED_MODULE_3__assets_stat_svg__["a" /* default */].id })
                    )
                )
            );
        }
    }]);

    return Sidebar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Sidebar);

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_app_scss__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scss_app_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_store__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_App__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Home__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Stat__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Calendar__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_NotFound__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Day__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Header__ = __webpack_require__(29);
















__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"],
    { store: __WEBPACK_IMPORTED_MODULE_4__redux_store__["a" /* default */] },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_react_router__["a" /* Router */],
        { history: __WEBPACK_IMPORTED_MODULE_5_react_router__["b" /* browserHistory */] },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_react_router__["c" /* Route */],
            { path: '/', component: __WEBPACK_IMPORTED_MODULE_6__components_App__["a" /* default */] },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router__["d" /* IndexRoute */], { component: __WEBPACK_IMPORTED_MODULE_7__components_Home__["a" /* default */] }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router__["c" /* Route */], { path: '/stat', component: __WEBPACK_IMPORTED_MODULE_8__components_Stat__["a" /* default */] }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_router__["c" /* Route */],
                { path: '/calendar' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router__["d" /* IndexRoute */], { component: __WEBPACK_IMPORTED_MODULE_9__components_Calendar__["a" /* default */] }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router__["c" /* Route */], { path: 'day/:dayId', component: __WEBPACK_IMPORTED_MODULE_11__components_Day__["a" /* default */] })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router__["c" /* Route */], { path: '*', component: __WEBPACK_IMPORTED_MODULE_10__components_NotFound__["a" /* default */] })
        )
    )
), document.getElementById('root'));

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = getdays;
/* harmony export (immutable) */ __webpack_exports__["f"] = getmarks;
/* harmony export (immutable) */ __webpack_exports__["h"] = getstat;
/* harmony export (immutable) */ __webpack_exports__["c"] = updateItem;
/* harmony export (immutable) */ __webpack_exports__["a"] = updatelist;
/* harmony export (immutable) */ __webpack_exports__["e"] = getdayById;
/* harmony export (immutable) */ __webpack_exports__["g"] = addmark;
/* harmony export (immutable) */ __webpack_exports__["b"] = deleteItem;
/* harmony export (immutable) */ __webpack_exports__["i"] = getcalendar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);


function getdays() {
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('/api/getdays/index').then(function (data) {
        return data.json();
    });
}

function getmarks() {
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('/api/getmarks').then(function (data) {
        return data.json();
    });
}
function getstat() {
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('/api/getstatistic').then(function (data) {
        return data.json();
    });
}

function updateItem(data) {
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()("/api/updateday/" + data.dayId, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            taskid: data.itemId,
            title: data.title,
            price: data.price
        })
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
function getdayById(id) {

    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('/api/getdays/byid/' + id + '').then(function (data) {
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

function deleteItem(data) {
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('/api/updateday/' + data.dayId + '/remove', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            taskid: data.itemId
        })
    });
}

function getcalendar() {
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('/api/getdays/calendar/').then(function (data) {
        return data.json();
    });
}

/***/ }),

/***/ 153:
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
                        dataFront: action.data,
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

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'GET_CALENDAR_START':
            return action.payload;
        case 'GET_CALENDAR_FINISH':
            return [].concat(_toConsumableArray(action.data));

        default:
            return state;
    }
}

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;


function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {

        case 'GET_DAY_BY_ID_START':
            return action.payload;
        case 'GET_DAY_BY_ID_ERROR':
            return state;
        case 'GET_DAY_BY_ID_FINISH':

            return action.data;
        case 'UPDATELIST_FINISH':
            return action.data;

        default:
            return state;
    }
}

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
            console.log('REDUCER', action);
            var g = state.concat();
            var h = state.findIndex(function (item) {
                return item.id == action.dataFront.id;
            });

            g.splice(h, 1, _extends({}, g[h], { items: [].concat(_toConsumableArray(g[h].items), [action.dataFront]) }));

            return g;
        case 'DELETE_ITEM_FINISH':

            var g = state.concat();
            var h = g.findIndex(function (item) {
                return item.id == action.dataFront.dayId;
            });

            var j = g[h].items.filter(function (item) {
                return item._id != action.dataFront.itemId;
            });

            var k = _extends({}, g[h], { items: j });
            g.splice(h, 1, k);

            return g;

        case 'UPDATE_ITEM_FINISH':
            var g = state.concat();
            var h = g.findIndex(function (item) {
                return item.id == action.dataFront.dayId;
            });

            var j = g[h].items.findIndex(function (item) {
                return item._id == action.dataFront.itemId;
            });
            var newItem = { defaultItem: action.dataFront.default, _id: action.dataFront.itemId, price: action.dataFront.price, title: action.dataFront.title };
            g[h].items.slice(j, 1, newItem);
            return g;

        default:
            return state;
    }
}

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__days__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__marks__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stat__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dayById__ = __webpack_require__(155);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dayById", function() { return __WEBPACK_IMPORTED_MODULE_4__dayById__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return __WEBPACK_IMPORTED_MODULE_3__calendar__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "days", function() { return __WEBPACK_IMPORTED_MODULE_0__days__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "marks", function() { return __WEBPACK_IMPORTED_MODULE_1__marks__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stat", function() { return __WEBPACK_IMPORTED_MODULE_2__stat__["a"]; });












/***/ }),

/***/ 158:
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

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'GET_STAT_START':
            return action.payload;
        case 'GET_STAT_FINISH':
            return [].concat(_toConsumableArray(action.data));
        default:
            return state;
    }
}

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: "header" },
				this.props.content
			);
		}
	}]);

	return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "calendar",
  "use": "calendar-usage",
  "viewBox": "0 0 60 60",
  "content": "<symbol viewBox=\"0 0 60 60\" id=\"calendar\">\r\n<g>\r\n\t<rect x=\"22\" y=\"43\" width=\"7\" height=\"7\" />\r\n\t<rect x=\"22\" y=\"25\" width=\"7\" height=\"7\" />\r\n\t<rect x=\"22\" y=\"34\" width=\"7\" height=\"7\" />\r\n\t<rect x=\"13\" y=\"34\" width=\"7\" height=\"7\" />\r\n\t<rect x=\"13\" y=\"25\" width=\"7\" height=\"7\" />\r\n\t<rect x=\"13\" y=\"43\" width=\"7\" height=\"7\" />\r\n\t<rect x=\"40\" y=\"25\" width=\"7\" height=\"7\" />\r\n\t<path d=\"M57,4h-7V1c0-0.553-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1v3H19V1c0-0.553-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1v3H3\r\n\t\tC2.447,4,2,4.447,2,5v11v43c0,0.553,0.447,1,1,1h54c0.553,0,1-0.447,1-1V16V5C58,4.447,57.553,4,57,4z M49,32v2v7v2v9h-9h-2h-7h-2\r\n\t\th-7h-2h-9v-9v-2v-7v-2v-9h9h2h7h2h7h2h9V32z M56,15H4V6h6v3c0,0.553,0.447,1,1,1h7c0.553,0,1-0.447,1-1V6h22v3c0,0.553,0.447,1,1,1\r\n\t\th7c0.553,0,1-0.447,1-1V6h6V15z\" />\r\n\t<rect x=\"40\" y=\"34\" width=\"7\" height=\"7\" />\r\n\t<rect x=\"40\" y=\"43\" width=\"7\" height=\"7\" />\r\n\t<rect x=\"31\" y=\"43\" width=\"7\" height=\"7\" />\r\n\t<rect x=\"31\" y=\"34\" width=\"7\" height=\"7\" />\r\n\t<rect x=\"31\" y=\"25\" width=\"7\" height=\"7\" />\r\n</g>\r\n\r\n\r\n</symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["a"] = (symbol);

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "del",
  "use": "del-usage",
  "viewBox": "0 0 15.642 15.642",
  "content": "<symbol viewBox=\"0 0 15.642 15.642\" id=\"del\">\n  <path fill-rule=\"evenodd\" d=\"M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z\" fill=\"#25ba9a\" />\n</symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["a"] = (symbol);

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "home",
  "use": "home-usage",
  "viewBox": "0 0 460.298 460.297",
  "content": "<symbol viewBox=\"0 0 460.298 460.297\" id=\"home\">\r\n<g>\r\n\t<g>\r\n\t\t<path d=\"M230.149,120.939L65.986,256.274c0,0.191-0.048,0.472-0.144,0.855c-0.094,0.38-0.144,0.656-0.144,0.852v137.041\r\n\t\t\tc0,4.948,1.809,9.236,5.426,12.847c3.616,3.613,7.898,5.431,12.847,5.431h109.63V303.664h73.097v109.64h109.629\r\n\t\t\tc4.948,0,9.236-1.814,12.847-5.435c3.617-3.607,5.432-7.898,5.432-12.847V257.981c0-0.76-0.104-1.334-0.288-1.707L230.149,120.939\r\n\t\t\tz\" />\r\n\t\t<path d=\"M457.122,225.438L394.6,173.476V56.989c0-2.663-0.856-4.853-2.574-6.567c-1.704-1.712-3.894-2.568-6.563-2.568h-54.816\r\n\t\t\tc-2.666,0-4.855,0.856-6.57,2.568c-1.711,1.714-2.566,3.905-2.566,6.567v55.673l-69.662-58.245\r\n\t\t\tc-6.084-4.949-13.318-7.423-21.694-7.423c-8.375,0-15.608,2.474-21.698,7.423L3.172,225.438c-1.903,1.52-2.946,3.566-3.14,6.136\r\n\t\t\tc-0.193,2.568,0.472,4.811,1.997,6.713l17.701,21.128c1.525,1.712,3.521,2.759,5.996,3.142c2.285,0.192,4.57-0.476,6.855-1.998\r\n\t\t\tL230.149,95.817l197.57,164.741c1.526,1.328,3.521,1.991,5.996,1.991h0.858c2.471-0.376,4.463-1.43,5.996-3.138l17.703-21.125\r\n\t\t\tc1.522-1.906,2.189-4.145,1.991-6.716C460.068,229.007,459.021,226.961,457.122,225.438z\" />\r\n\t</g>\r\n</g>\r\n\r\n</symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["a"] = (symbol);

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "stat",
  "use": "stat-usage",
  "viewBox": "0 0 490.4 490.4",
  "content": "<symbol viewBox=\"0 0 490.4 490.4\" id=\"stat\">\r\n<g>\r\n\t<g>\r\n\t\t<path d=\"M221.75,490.4V268.7H0.05C0.05,391.1,99.35,490.4,221.75,490.4z M179.55,443.1c-65.1-15.8-116.5-67.1-132.2-132.2h132.2\r\n\t\t\tV443.1z\" />\r\n\t\t<path d=\"M268.75,0c-122.5,0-221.8,99.3-221.8,221.7h221.7v221.7c122.5,0,221.7-99.3,221.7-221.7S391.15,0,268.75,0z\" />\r\n\t</g>\r\n</g>\r\n\r\n</symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["a"] = (symbol);

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "update",
  "use": "update-usage",
  "viewBox": "0 0 344.37 344.37",
  "content": "<symbol viewBox=\"0 0 344.37 344.37\" id=\"update\">\n<g>\n\t<g>\n\t\t<path d=\"M334.485,37.463c-6.753-1.449-13.396,2.853-14.842,9.603l-9.084,42.391C281.637,40.117,228.551,9.155,170.368,9.155    c-89.603,0-162.5,72.896-162.5,162.5c0,6.903,5.596,12.5,12.5,12.5c6.903,0,12.5-5.597,12.5-12.5    c0-75.818,61.682-137.5,137.5-137.5c49.429,0,94.515,26.403,118.925,68.443l-41.674-8.931c-6.752-1.447-13.396,2.854-14.841,9.604    c-1.446,6.75,2.854,13.396,9.604,14.842l71.536,15.33c1.215,0.261,2.449,0.336,3.666,0.234c2.027-0.171,4.003-0.836,5.743-1.962    c2.784-1.801,4.738-4.634,5.433-7.875l15.331-71.536C345.535,45.555,341.235,38.911,334.485,37.463z\" fill=\"#25ba9a\" />\n\t\t<path d=\"M321.907,155.271c-6.899,0.228-12.309,6.006-12.081,12.905c1.212,36.708-11.942,71.689-37.042,98.504    c-25.099,26.812-59.137,42.248-95.844,43.46c-1.53,0.05-3.052,0.075-4.576,0.075c-47.896-0.002-92.018-24.877-116.936-65.18    l43.447,11.65c6.668,1.787,13.523-2.168,15.311-8.837c1.788-6.668-2.168-13.522-8.836-15.312l-70.664-18.946    c-3.202-0.857-6.615-0.409-9.485,1.247c-2.872,1.656-4.967,4.387-5.826,7.589L0.43,293.092    c-1.788,6.668,2.168,13.522,8.836,15.311c1.085,0.291,2.173,0.431,3.245,0.431c5.518,0,10.569-3.684,12.066-9.267l10.649-39.717    c29.624,46.647,81.189,75.367,137.132,75.365c1.797,0,3.604-0.029,5.408-0.089c43.381-1.434,83.608-19.674,113.271-51.362    s45.209-73.031,43.776-116.413C334.586,160.453,328.805,155.026,321.907,155.271z\" fill=\"#25ba9a\" />\n\t</g>\n</g>\n\n</symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["a"] = (symbol);

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/../assets/ghost.png";

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/../assets/spinner.gif";

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = action_updatelist;
/* harmony export (immutable) */ __webpack_exports__["f"] = action_deleteItem;
/* harmony export (immutable) */ __webpack_exports__["i"] = action_updateItem;
/* harmony export (immutable) */ __webpack_exports__["b"] = action_getdays;
/* harmony export (immutable) */ __webpack_exports__["a"] = action_getdayById;
/* harmony export (immutable) */ __webpack_exports__["c"] = action_getmarks;
/* harmony export (immutable) */ __webpack_exports__["d"] = action_addmark;
/* harmony export (immutable) */ __webpack_exports__["h"] = action_getstat;
/* harmony export (immutable) */ __webpack_exports__["g"] = action_getcalendar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(152);


function action_updatelist(data) {
    return { type: 'PROMISE_DATA', promise: __WEBPACK_IMPORTED_MODULE_0__api__["a" /* updatelist */], data: data, actions: ['UPDATELIST_START', 'UPDATELIST_FINISH', 'UPDATELIST_ERROR'] };
}
function action_deleteItem(data) {
    return { type: 'PROMISE_DATA', promise: __WEBPACK_IMPORTED_MODULE_0__api__["b" /* deleteItem */], data: data, actions: ['DELETE_ITEM_START', 'DELETE_ITEM_FINISH', 'DELETE_ITEM_ERROR'] };
}
function action_updateItem(data) {
    return { type: 'PROMISE_DATA', promise: __WEBPACK_IMPORTED_MODULE_0__api__["c" /* updateItem */], data: data, actions: ['UPDATE_ITEM_START', 'UPDATE_ITEM_FINISH', 'UPDATE_ITEM_ERROR'] };
}

function action_getdays() {
    return { type: 'PROMISE', promise: __WEBPACK_IMPORTED_MODULE_0__api__["d" /* getdays */], actions: ['GET_DAYS_START', 'GET_DAYS_FINISH', 'GET_DAYS_ERROR'] };
}
function action_getdayById(id) {
    return { type: 'PROMISE_DATA', promise: __WEBPACK_IMPORTED_MODULE_0__api__["e" /* getdayById */], data: id, actions: ['GET_DAY_BY_ID_START', 'GET_DAY_BY_ID_FINISH', 'GET_DAY_BY_ID_ERROR'] };
}
function action_getmarks() {
    return { type: 'PROMISE', promise: __WEBPACK_IMPORTED_MODULE_0__api__["f" /* getmarks */], actions: ['GET_MARKS_START', 'GET_MARKS_FINISH', 'GET_MARKS_ERROR'] };
}

function action_addmark(title) {
    return { type: 'PROMISE_DATA', promise: __WEBPACK_IMPORTED_MODULE_0__api__["g" /* addmark */], data: title, actions: ['ADD_MARK_START', 'ADD_MARK_FINISH', 'ADD_MARK_ERROR'] };
}

function action_getstat() {
    return { type: 'PROMISE', promise: __WEBPACK_IMPORTED_MODULE_0__api__["h" /* getstat */], actions: ['GET_STAT_START', 'GET_STAT_FINISH', 'GET_STAT_ERROR'] };
}

function action_getcalendar() {
    return { type: 'PROMISE', promise: __WEBPACK_IMPORTED_MODULE_0__api__["i" /* getcalendar */], actions: ['GET_CALENDAR_START', 'GET_CALENDAR_FINISH', 'GET_CALENDAR_ERROR'] };
}

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Card__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_spinner_gif__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_spinner_gif___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_spinner_gif__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_addons_css_transition_group__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_addons_css_transition_group__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







// var spinner = './assets/spinner.gif';

var Container = function (_React$Component) {
    _inherits(Container, _React$Component);

    function Container() {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
    }

    _createClass(Container, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.cards !== this.props.cards;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var counter = 0;
            var cards;

            console.log('CONATINER', this.props.cards);

            if (Array.isArray(this.props.cards)) {

                cards = this.props.cards.map(function (item) {
                    counter++;
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Card__["a" /* default */], { onDeleteItem: _this2.props.onDeleteItem, first: counter == 1 ? true : false, stat: _this2.props.stat ? true : false, number: Math.round(Math.random() * 4), openModal: _this2.props.openModal, id: item.id, date: item.data || item.date,
                        items: item.items, key: item.id ? item.id : counter });
                });
            } else if (this.props.cards == 'loading') {
                cards = '';
            } else {
                cards = '';
            }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'container' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_react_addons_css_transition_group___default.a,
                    { transitionName: 'animation-opacity',
                        transitionAppear: true,
                        transitionEnterTimeout: 800,
                        transitionLeaveTimeout: 800,
                        transitionAppearTimeout: 800
                    },
                    cards
                )
            );
        }
    }]);

    return Container;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(161)();
exports.push([module.i, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n/**\r\n * 1. Change the default font family in all browsers (opinionated).\r\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\r\n * Remove the margin in all browsers (opinionated).\r\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Add the correct display in IE 9-.\r\n * 1. Add the correct display in Edge, IE, and Firefox.\r\n * 2. Add the correct display in IE.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  /* 1 */\n  display: block; }\n\n/**\r\n * Add the correct display in IE 9-.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; }\n\n/**\r\n * Add the correct display in iOS 4-7.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\r\n * Add the correct display in IE 10-.\r\n * 1. Add the correct display in IE.\r\n */\ntemplate,\n[hidden] {\n  display: none; }\n\n/* Links\r\n   ========================================================================== */\n/**\r\n * 1. Remove the gray background on active links in IE 10.\r\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\r\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\r\n * Remove the outline on focused links when they are also active or hovered\r\n * in all browsers (opinionated).\r\n */\na:active,\na:hover {\n  outline-width: 0; }\n\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * 1. Remove the bottom border in Firefox 39-.\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\r\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\r\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\r\n * Add the correct font style in Android 4.3-.\r\n */\ndfn {\n  font-style: italic; }\n\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\r\n * Add the correct background and color in IE 9-.\r\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\r\n * Add the correct font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove the border on images inside links in IE 10-.\r\n */\nimg {\n  border-style: none;\n  max-width: 100%; }\n\n/**\r\n * Hide the overflow in IE.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\r\n * Add the correct margin in IE 8.\r\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/* Forms\r\n   ========================================================================== */\n/**\r\n * 1. Change font properties to `inherit` in all browsers (opinionated).\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\r\n * Restore the font weight unset by the previous rule.\r\n */\noptgroup {\n  font-weight: bold; }\n\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\r\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\r\n *    controls in Android 4.\r\n * 2. Correct the inability to style clickable types in iOS and Safari.\r\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\r\n * Change the border, margin, and padding in all browsers (opinionated).\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\r\n * Remove the default vertical scrollbar in IE.\r\n */\ntextarea {\n  overflow: auto;\n  resize: none; }\n\n/**\r\n * 1. Add the correct box sizing in IE 10-.\r\n * 2. Remove the padding in IE 10-.\r\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\r\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\r\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\r\n */\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54; }\n\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box; }\n\nsvg {\n  max-width: 100%; }\n\n/**\r\n * Hack to remove Chrome's yellow background on autofilling inputs\r\n */\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  transition: background-color 500000s ease-in-out 0s, color 500000s ease-in-out 0s; }\n\n/**\r\n * Fix for IE select bars\r\n */\nselect::-ms-value,\nselect:focus::-ms-value {\n  background: none; }\n\ntable {\n  border-collapse: collapse; }\n\np {\n  margin: 0 0 1em 0; }\n\nbody {\n  background: #ffffff;\n  color: #252525;\n  font-family: 'Roboto', sans-serif; }\n\n.main {\n  padding-left: 130px;\n  max-width: 800px; }\n  @media (max-width: 991px) {\n    .main {\n      padding-left: 70px; } }\n\nbody.open-modal {\n  overflow: hidden; }\n\n.wrapper {\n  max-width: 992px;\n  margin: 0 auto; }\n  @media (max-width: 991px) {\n    .wrapper {\n      max-width: 400px; } }\n\nsvg {\n  max-width: 100%;\n  max-height: 100%; }\n\n.animation-opacity-enter {\n  opacity: 0; }\n\n.animation-opacity-enter.animation-opacity-enter-active {\n  opacity: 1;\n  transition: 0.3s; }\n\n.animation-opacity-leave {\n  opacity: 1; }\n\n.animation-opacity-leave.animation-opacity-leave-active {\n  opacity: 0;\n  transition: 0.3s; }\n\n.animation-opacity-appear {\n  opacity: 0; }\n\n.animation-opacity-appear.animation-opacity-appear-active {\n  opacity: 1;\n  transition: .5s; }\n\n.day_loaded {\n  opacity: 1;\n  transition: 0.3s; }\n\n.day_loading {\n  opacity: 0;\n  transition: 0.3s; }\n\n.modal {\n  position: fixed;\n  background: rgba(0, 0, 0, 0.49);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  max-height: 0;\n  overflow: hidden;\n  transition: 0.3s; }\n  .modal__error {\n    display: block;\n    color: #f91f1f;\n    font-weight: 600;\n    text-align: center;\n    height: 20px;\n    margin-top: 5px; }\n  .modal_open {\n    max-height: 100%; }\n  .modal__body {\n    background: #25ba9a;\n    max-width: 600px;\n    margin: 0 auto;\n    margin-top: 100px;\n    padding: 0px;\n    position: relative;\n    border-radius: 10px; }\n    @media (max-width: 768px) {\n      .modal__body {\n        width: 100%; } }\n  .modal__content {\n    border-radius: 0;\n    background: #fff;\n    padding: 10px 10px; }\n  .modal__add {\n    background: rgba(0, 0, 0, 0.14);\n    border: none;\n    color: #fff;\n    line-height: 1;\n    font-size: 29px;\n    border-radius: 10px 10px 10px 0px;\n    padding: 2px 12px;\n    margin-left: 0px;\n    transition: 0.3s;\n    cursor: pointer;\n    margin-bottom: 0px; }\n    .modal__add:hover {\n      background: rgba(0, 0, 0, 0.24); }\n  .modal__close {\n    background: rgba(0, 0, 0, 0.14);\n    border: none;\n    color: #fff;\n    line-height: 1;\n    float: right;\n    font-size: 29px;\n    position: relative;\n    border-radius: 10px;\n    padding: 2px 12px;\n    margin-left: 10px;\n    transition: 0.3s;\n    cursor: pointer;\n    margin-bottom: 0px;\n    -ms-transform: rotate(0deg);\n        transform: rotate(0deg);\n    border-radius: 10px 10px 0px 10px;\n    padding: 4px 10px 4px;\n    line-height: 1;\n    font-size: 25px;\n    cursor: pointer;\n    transition: 0.3s;\n    cursor: pointer; }\n    .modal__close span {\n      display: inline-block;\n      -ms-transform: rotate(45deg);\n          transform: rotate(45deg); }\n  .modal__marks {\n    padding: 5px 10px 20px; }\n    .modal__marks_undefault {\n      border-top: solid 2px #757575; }\n  .modal__input {\n    width: 100%;\n    border: transparent;\n    border-bottom: 2px solid #757575;\n    height: 40px;\n    text-align: center;\n    font-size: 31px;\n    color: #757575; }\n    @media (max-width: 768px) {\n      .modal__input {\n        font-size: 20px; } }\n    .modal__input:focus {\n      outline: none; }\n\n.mark {\n  display: inline-block;\n  padding: 6px 6px;\n  border-radius: 6px;\n  min-width: 23%;\n  text-align: center;\n  line-height: 1;\n  border: none;\n  cursor: pointer;\n  margin: 3px 1%;\n  font-size: 16px;\n  background: transparent;\n  transition: 0.3s; }\n  @media (max-width: 768px) {\n    .mark {\n      font-size: 12px;\n      min-width: 31%; } }\n  .mark:focus {\n    outline: none; }\n  .mark_default {\n    background: transparent;\n    border: 1px solid #25ba9a;\n    color: #25ba9a; }\n  .mark_undefault {\n    color: #a4a4a4;\n    background: transparent;\n    border: 1px solid  #a4a4a4; }\n  .mark_active {\n    background: #25ba9a;\n    color: #fff;\n    border: 1px solid #25ba9a; }\n\n.add-mark {\n  border: 1px solid #25ba9a;\n  margin: 3px 1%;\n  display: inline-block;\n  background: transparent;\n  color: #25ba9a;\n  line-height: 1;\n  padding: 4px;\n  border-radius: 5px;\n  min-width: 23%;\n  text-align: center;\n  overflow: hidden;\n  vertical-align: top;\n  height: 27px;\n  cursor: pointer;\n  transition: 0.3s; }\n  @media (max-width: 768px) {\n    .add-mark {\n      min-width: 31%; } }\n  .add-mark_active {\n    height: 52px;\n    max-width: 100%; }\n  .add-mark__label {\n    padding-bottom: 4px;\n    font-size: 20px;\n    line-height: 1; }\n  .add-mark .add-mark__input {\n    width: 100%;\n    border: none;\n    border-radius: 7px;\n    height: 20px;\n    padding: 0 5px; }\n\n.sidebar {\n  top: 0;\n  width: 100px;\n  display: inline-block;\n  height: 100%;\n  background: #25ba9a;\n  padding: 0;\n  position: fixed; }\n  @media (max-width: 991px) {\n    .sidebar {\n      width: 52px; } }\n\n.nav-item {\n  transition: 0.3s;\n  position: relative;\n  display: inline-block;\n  padding: 10px 0;\n  width: 106px;\n  background: transparent;\n  border-radius: 0 5px 5px 0; }\n  .nav-item__img {\n    margin: 0 20px;\n    width: 50px;\n    height: 50px;\n    position: relative;\n    z-index: 5;\n    display: block; }\n    .nav-item__img svg {\n      fill: #fff; }\n  .nav-item:after {\n    opacity: 0;\n    transition: 0.3s;\n    width: 0;\n    content: '';\n    background: transparent;\n    height: 0;\n    right: -18px;\n    left: auto;\n    position: absolute;\n    top: calc(50% - 10px);\n    border: 10px solid transparent;\n    border-radius: 0;\n    border-left: #088a6e 8px solid; }\n  .nav-item_active {\n    background: #088a6e; }\n    .nav-item_active:after {\n      opacity: 1; }\n  @media (max-width: 991px) {\n    .nav-item {\n      width: 55px; }\n      .nav-item__img {\n        margin: 0 5px;\n        width: 40px;\n        height: 40px; } }\n\n.card {\n  padding: 0;\n  vertical-align: top;\n  margin: 10px 0;\n  display: block;\n  text-align: left; }\n  @media (max-width: 768px) {\n    .card {\n      width: 100%; } }\n  .card__date {\n    font-size: 16px;\n    vertical-align: middle;\n    display: inline-block;\n    margin-top: 8px;\n    margin-top: 9px; }\n  .card__header {\n    text-align: center;\n    font-size: 12px;\n    padding: 0;\n    color: #fff;\n    background: #25ba9a; }\n    .card__header:after {\n      content: '';\n      display: table;\n      clear: both; }\n  .card__content {\n    background: transparent;\n    border-radius: 10px;\n    width: 100%; }\n    .card__content_close {\n      max-height: 0;\n      overflow: hidden;\n      padding: 0 20px;\n      opacity: 0; }\n    .card__content_open {\n      max-height: 1000px;\n      padding: 20px;\n      opacity: 1; }\n  .card__toggle {\n    padding: 8px 12px 13px;\n    margin: 0;\n    vertical-align: middle;\n    float: right;\n    border-radius: 5px;\n    border: none;\n    line-height: 1;\n    color: #fff;\n    cursor: pointer;\n    transition: 0.3s;\n    background: transparent;\n    transition: 0.3s; }\n    .card__toggle_open .card__toggle-icon {\n      -ms-transform-origin: -4px 12px;\n          transform-origin: -4px 12px;\n      -ms-transform: rotate(45deg);\n          transform: rotate(45deg); }\n    .card__toggle:hover, .card__toggle:focus {\n      outline: none;\n      background: rgba(0, 0, 0, 0.14); }\n  .card__toggle-icon {\n    display: inline-block;\n    transition: 0.6s;\n    border: 2px solid rgba(255, 255, 255, 0);\n    border-top: 2px solid #fff;\n    border-left: 2px solid #fff;\n    width: 15px;\n    height: 15px;\n    -ms-transform: rotate(225deg);\n        transform: rotate(225deg); }\n  .card__add {\n    padding: 4px 15px;\n    vertical-align: middle;\n    float: left;\n    border-radius: 5px;\n    border: none;\n    font-size: 29px;\n    line-height: 1;\n    color: #fff;\n    cursor: pointer;\n    transition: 0.3s;\n    background: transparent; }\n    .card__add:hover, .card__add:focus {\n      outline: none;\n      background: rgba(0, 0, 0, 0.14); }\n\n.toggle-enter {\n  max-height: 0;\n  overflow: hidden; }\n\n.toggle-enter.toggle-enter-active {\n  max-height: 1000px;\n  transition: 0.6s ease-in; }\n\n.toggle-leave {\n  max-height: 1000px; }\n\n.toggle-leave.toggle-leave-active {\n  max-height: 0;\n  overflow: hidden;\n  transition: 0.6s ease-out; }\n\n.header {\n  width: 100%;\n  margin-top: 34px;\n  margin-bottom: 30px;\n  border-radius: 5px 0 0 5px;\n  font-size: 15px;\n  background-color: #25ba9a;\n  font-weight: 600;\n  color: #fff;\n  padding: 15px 0px 15px 20px; }\n\n@keyframes leave {\n  90% {\n    padding: 0;\n    margin: 0;\n    max-height: 0;\n    border-width: 2px; }\n  100% {\n    margin: 0;\n    border-width: 0;\n    padding: 0;\n    margin: 0;\n    max-height: 0; } }\n\n.item {\n  max-height: 70px;\n  transition: 0.6s ease-in;\n  display: block;\n  position: relative;\n  margin: 5px 0 0;\n  border-radius: 10px;\n  font-size: 12px;\n  color: #a4a4a4;\n  border: solid 2px #ececec;\n  border-radius: 3px;\n  padding: 2px 0; }\n  .item svg path {\n    fill: inherit; }\n  .item_leave {\n    overflow: hidden;\n    animation: leave 0.5s forwards; }\n  .item__title {\n    display: inline-block;\n    padding: 5px 5px;\n    min-width: 0;\n    text-align: left; }\n  .item__price {\n    background: transparent;\n    display: inline-block;\n    width: 75px;\n    padding-left: 13px; }\n  .item_default {\n    border-color: #25ba9a;\n    color: #25ba9a; }\n  .item_total {\n    color: #fff;\n    background: #65e0c6;\n    font-weight: 700;\n    border-color: #25ba9a; }\n  .item_default .item__percent {\n    background: #a8ffec; }\n  .item__percent {\n    content: '';\n    top: 0;\n    bottom: 0;\n    z-index: -1;\n    background: #f5f5f5;\n    left: 0;\n    width: 0%;\n    height: 100%;\n    position: absolute; }\n  .item__update {\n    height: 13px;\n    width: 14px;\n    vertical-align: top;\n    cursor: pointer;\n    display: inline-block; }\n    .item__update_green svg {\n      fill: #25ba9a; }\n    .item__update_grey svg {\n      color: #a4a4a4; }\n  .item__delete {\n    height: 11px;\n    width: 12px;\n    vertical-align: top;\n    cursor: pointer;\n    display: inline-block; }\n    .item__delete_green svg {\n      fill: #25ba9a; }\n    .item__delete_grey svg {\n      color: #a4a4a4; }\n  .item__delete {\n    margin-left: 17px; }\n  .item__right {\n    float: right;\n    padding: 5px 10px 0 0; }\n\n.error404 {\n  text-align: center; }\n  .error404__title {\n    font-size: 80px;\n    line-height: 1;\n    margin: 20px 0 0;\n    color: #1eafaf; }\n  .error404__description {\n    line-height: 1;\n    margin: 0;\n    color: #229090; }\n\n.calendar {\n  width: 100%;\n  margin: 0;\n  text-align: left; }\n  .calendar__link {\n    width: 87px;\n    text-align: center;\n    height: 90px;\n    background: #f1f1f1;\n    cursor: pointer;\n    padding: 34px 0;\n    margin-bottom: 10px;\n    margin-right: 9px;\n    color: #a4a4a4;\n    display: inline-block;\n    text-decoration: none; }\n    .calendar__link:nth-child(7n) {\n      margin-right: 0; }\n    .calendar__link_disabled {\n      color: #e2e2e2;\n      background: #cacaca;\n      cursor: auto; }\n  @media (max-width: 991px) {\n    .calendar__link {\n      background: transparent;\n      color: #949494;\n      width: calc(100% /7);\n      height: auto;\n      padding: 0;\n      margin-right: 0px; }\n    .calendar__link_disabled {\n      color: #ececec; } }\n\n.nav {\n  background: #25ba9a;\n  padding: 8px 20px;\n  width: 100%;\n  color: #fff;\n  text-align: center;\n  margin-bottom: 20px; }\n  .nav__arrow_disable {\n    visibility: hidden;\n    opacity: 0; }\n  .nav__arrow {\n    display: inline-block;\n    transition: 0.6s;\n    margin-top: 3px;\n    border: 2px solid rgba(255, 255, 255, 0);\n    border-top: 2px solid #fff;\n    border-left: 2px solid #fff;\n    width: 15px;\n    height: 15px;\n    cursor: pointer; }\n  .nav__arrow_next {\n    float: right;\n    -ms-transform: rotate(135deg);\n        transform: rotate(135deg); }\n  .nav__arrow_prev {\n    -ms-transform: rotate(-45deg);\n        transform: rotate(-45deg);\n    float: left; }\n", ""]);

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var Icon = function Icon(_ref) {
    var id = _ref.id;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('use', { xlinkHref: '#' + id })
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


// import spinner from './../../assets/spinner.gif';


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

            errorMessage: ''
        };
        return _this;
    }

    _createClass(Modal, [{
        key: 'defaultTesting',
        value: function defaultTesting(title) {
            var g = this.props.marks.defaults.filter(function (item) {
                return item.title == title;
            });
            console.log(g);
        }
    }, {
        key: 'handleClick',
        value: function handleClick(evt) {
            this.defaultTesting('Обед(Алёша)');
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
            console.log(this.props);

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
                marks = this.props.marks == 'loading' || typeof this.props.marks.defaults == 'undefined' || typeof this.props.marks == 'undefined' ? '' : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
                            {
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
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            null,
                            '+'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'modal__content' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                            type: 'number',
                            className: 'modal__input',
                            placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 \u043F\u043E\u043A\u0443\u043F\u043A\u0438',
                            onChange: this.priceChange.bind(this),
                            value: this.state.priceValue }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'modal__error' },
                            this.state.errorMessage
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default.a,
                            { transitionName: 'animation-opacity',
                                transitionAppear: true,
                                transitionAppearTimeout: 800,
                                transitionEnterTimeout: 800,
                                transitionLeaveTimeout: 800
                            },
                            marks
                        )
                    )
                )
            );
        }
    }]);

    return Modal;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Modal);

/***/ })

},[151]);
//# sourceMappingURL=app.js.map