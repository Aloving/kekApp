import React from "react";
import Header from "../Header";
import {action_getcalendar} from "../../redux/actions";
import {connect} from "react-redux";
import CalendarBody from "../calendar/CalendarBody";

var StateObject = {
  minDate: {year: 0, month: 0},
  dateNow: {year: 0, month: 0},
  startDays: [],
  months: {},
  currentYear: 0,
  currentMonth: 0
}

var currentDate = (function () {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  StateObject.dateNow = {year: year, month: month};
  StateObject.currentYear = year;
  StateObject.currentMonth = month;
  var dayInMonth = 32 - new Date(year, month, 32).getDate();
  StateObject.startDays = Array(dayInMonth).fill(null);
}())

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      visibleDays: [],
      arrowPrevActive: true,
      arrowNextActive: false,
    }
    this.dateToString = this.dateToString.bind(this);
    this.filterDays = this.filterDays.bind(this);
    this.minDate = this.minDate.bind(this);
    this.showNextMonth = this.showNextMonth.bind(this);
    this.showPrevMonth = this.showPrevMonth.bind(this);
  }

  componentDidMount() {
    if(!this.props.calendar.length) {
      this.props.getcalendar({userId: this.props.userId});
    }else{
      this.filterDays(StateObject.currentYear, StateObject.currentMonth)
    }
    document.title = "Календарь";
  }

  componentDidUpdate() {
    if (this.props.calendar.length) {
      StateObject.minDate.year == 0 ? this.minDate(): null;
      this.state.visibleDays.length == 0 ? this.filterDays(StateObject.dateNow.year, StateObject.dateNow.month) : null;
    }
  }

  minDate() {
    var minYear = Math.min.apply(Math, this.props.calendar.map(function (item) {
      return item.date.year
    }))
    var minYearMonths = this.props.calendar.filter((item) => {
      return item.date.year == minYear;
    })
    var minMonth = Math.min.apply(Math, minYearMonths.map(function (item) {
      return item.date.month
    }))
    StateObject.minDate = {year: minYear, month: minMonth};
  }

  dateToString(month) {
    var monthsArray = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентабрь", "Октябрь", "Ноябрь", "Декабрь"];
    return monthsArray[month];
  }

  filterDays(year, month) {
    var max = year < StateObject.dateNow.year ||  (year >= StateObject.dateNow.year && month < StateObject.dateNow.month);
    var min = year > StateObject.minDate.year ||  (year <= StateObject.dateNow.year && month > StateObject.minDate.month);

    this.setState({arrowNextActive: max});
    this.setState({arrowPrevActive: min});

    if (StateObject.months[year + ' ' + month]) {
      this.setState({visibleDays: StateObject.months[year + ' ' + month]});
    } else {
      var dayInMonth = 32 - new Date(year, month, 32).getDate();
      var ollDays = Array(dayInMonth).fill(null);

      this.props.calendar
        .filter((item) => {
        return item.date.year == year && item.date.month == month;
      })
        .map((item) => {
        var index = item.date.day - 1;
        ollDays.splice(index, 1, item)
      });

      this.setState({visibleDays: ollDays});
      StateObject.months[year + ' ' + month] = ollDays;
    }
  }

  showPrevMonth() {
    var year = StateObject.currentYear;
    var month = StateObject.currentMonth;

    if( year == StateObject.minDate.year && month <= StateObject.minDate.month){return};

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

  showNextMonth() {
    var year = StateObject.currentYear;
    var month = StateObject.currentMonth;

    if( year == StateObject.dateNow.year && month >= StateObject.dateNow.month){return};

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

  render() {
    console.log(StateObject.currentYear, StateObject.currentMonth, StateObject.minDate);
    var daysMap;
    if (!this.state.visibleDays.length) {
      daysMap = StateObject.startDays;
    } else {
      daysMap = this.state.visibleDays;
    }
    var props = {
      showPrevMonth: this.showPrevMonth,
      arrowPrevActive: this.state.arrowPrevActive,
      currentMonth: this.dateToString(StateObject.currentMonth),
      showNextMonth: this.showNextMonth,
      arrowNextActive: this.state.arrowNextActive,
      items: daysMap
    }
    var content = <CalendarBody {...props}/>
    return (
      <div className="calendar">
        <Header content='Календарь'/>
        {content}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getcalendar: (data) => {
      dispatch(action_getcalendar(data));
    },
  };
};

export default connect(
  (state) => {
    return {calendar: state.calendar}
  },
  mapDispatchToProps
)(Calendar);
