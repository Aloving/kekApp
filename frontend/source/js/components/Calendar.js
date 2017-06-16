import React from 'react';
import Header from './Header';
import {Link} from 'react-router'
import ghost from './../../assets/ghost.png';
import {action_getcalendar} from '../redux/actions';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


var StateObject = {
    minDate: {year: 0, month: 0},
    dateNow: {year: 0, month: 0},
    startDays: [],
    months: {},
    currentYear : 0,
    currentMonth: 0
}

var currentDate = (function(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    StateObject.dateNow = {year: year, month: month};
    var dayInMonth = 32 - new Date(year, month, 32).getDate();
    for (var i = 0; i < dayInMonth ; i++) {
        StateObject.startDays.push(null);
    }
    StateObject.currentYear = year;
    StateObject.currentMonth = month;

}())

// currentDate();

class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {
            visibleDays: [],
            arrowPrevActive : true,
            arrowNextActive : false,
        }


        this.dateToString = this.dateToString.bind(this);
        this.filterDays = this.filterDays.bind(this);
        this.minMax = this.minMax.bind(this);
    }
    componentWillMount() {
        this.props.getcalendar();
        document.title = "Календарь";
    }
    componentDidUpdate() {
        if(typeof this.props.calendar == 'object' && this.props.calendar.length){
            if(StateObject.minDate.year == 0){
                this.minMax();
            }
            this.state.visibleDays.length == 0 ? this.filterDays(StateObject.dateNow.year, StateObject.dateNow.month) : null;
        }


        StateObject.currentMonth =  StateObject.dateNow.month;
        StateObject.currentYear =  StateObject.dateNow.year;

    }
    minMax(){

        var minYear =  Math.min.apply(Math,this.props.calendar.map(function(item){return item.date.year}))
        var minYearMonths = this.props.calendar.filter((item)=>{
            return item.date.year == minYear;
        })
        var minMonth = Math.min.apply(Math,minYearMonths.map(function(item){return item.date.month}))
        StateObject.minDate =  {year:minYear, month: minMonth};


    }
    dateToString(month) {
        var monthsArray = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентабрь", "Октябрь", "Ноябрь", "Декабрь"];
        return monthsArray[month];

    }
    filterDays(year, month) {
        var max = year >=  StateObject.dateNow.year && month >= StateObject.dateNow.month  ? false : true;
        var min = year <= StateObject.minDate.year && month <= StateObject.minDate.month ? false :  true;
        this.setState({arrowNextActive: max});
        this.setState({arrowPrevActive: min});



        if(StateObject.months[year + ' ' + month]){
            this.setState({visibleDays: StateObject.months[year + ' ' + month]});
        }else {

            var ollDays = [];
            var dayInMonth = 32 - new Date(year, month, 32).getDate();
            for (var i = 0; i < dayInMonth; i++) {
                ollDays.push(null);
            }

            this.props.calendar.filter((item) => {
                return item.date.year == year;
            })
                .filter((item) => {
                    return item.date.month == month;
                }).map(item => {

                let index = item.date.day - 1;
                ollDays.splice(index, 1, item)
            })
            this.setState({visibleDays: ollDays});

            StateObject.months[year + ' ' + month] = ollDays;
        }
        


    }
    showPrevMonth(){
        var year = StateObject.currentYear;
        var month = StateObject.currentMonth;

        if(month == 0){
            year -= 1;
            month = 11;

            StateObject.currentYear = year;
            StateObject.currentMonth = month;
            this.filterDays(year, month);
        }else{
            month -=   1;
            StateObject.currentMonth = month;
            this.filterDays(year, month);
        }
    }
    showNextMonth(){
        var year = StateObject.currentYear;
        var month = StateObject.currentMonth;
        if(month == 11){
            year += 1;
            month = 0;

            StateObject.currentYear = year;
            StateObject.currentMonth = month;
            this.filterDays(year, month);
        }else{
            month +=   1;
            StateObject.currentMonth = month;
            this.filterDays(year, month);
        }
    }
   
    render() {
       var counter = 0;
       var daysMap = this.state.visibleDays.length == 0 ? StateObject.startDays :   this.state.visibleDays;
       var items =
           <div>
               {
                   daysMap.map(item => {
                       counter++;
                       return item == null ?  <div  key={counter} className="calendar__link calendar__link_disabled" >{counter}</div> : typeof item == 'object' ?
                           <Link  key={item._id} className="calendar__link" to={"calendar/day/" + item._id + ""}>{item.date.day}</Link> : '';
                   })
               }
           </div>

        return (

        <ReactCSSTransitionGroup  transitionName="animation-opacity"
                                  transitionAppear={true}
                                  transitionEnterTimeout={800}
                                  transitionLeaveTimeout={800}
                                  transitionAppearTimeout={800}
        >
          <Header content='Календарь'/>
            <div className="calendar">
             
                {/* <h1>{this.state.currentYear}</h1> */}
                <div className="nav">
                 <div onClick={this.showPrevMonth.bind(this)} 
                 className={this.state.arrowPrevActive ?
                  "nav__arrow nav__arrow_prev" :
                   "nav__arrow  nav__arrow_disable nav__arrow_prev"}></div>
                   
                    <span className="nav__text">{this.dateToString(StateObject.currentMonth)}</span>
                    <div onClick={this.showNextMonth.bind(this)} 
                    className={this.state.arrowNextActive ? 
                        "nav__arrow nav__arrow_next"
                         : "nav__arrow  nav__arrow_disable nav__arrow_next"}></div>
                    

                </div>
               

           
                {items}
            </div>
        </ReactCSSTransitionGroup>

        )

    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getcalendar: () => {
            dispatch(action_getcalendar());
        },


    };
};
export default connect(
    (state) => {
        return {calendar: state.calendar}
    },
    mapDispatchToProps
)(Calendar);
