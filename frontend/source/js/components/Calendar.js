import React from 'react';
import {Link} from 'react-router'
import Header from './Header';
import ghost from './../../assets/ghost.png';
import {action_getcalendar} from '../redux/actions';
import {connect} from 'react-redux';

class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {
            currentYear: 0,
            currentMonth: 0,
            stringCurrentMonth: '',
            stringCurrentYear: '',
            visibleDays: [],
            minDate: {year: 0, month: 0},
            MaxDate: {year: 0, month: 0},
            arrowPrevActive : true,
            arrowNextActive : true,

        }

        this.currentDate = this.currentDate.bind(this);
        this.dateToString = this.dateToString.bind(this);
        this.filterDays = this.filterDays.bind(this);
        this.minMax = this.minMax.bind(this);
    }
    componentWillMount() {
        this.props.getcalendar();
        document.title = "Календарь";
        this.currentDate();
    }
    componentDidUpdate() {
        if(typeof this.props.calendar == 'object' && this.props.calendar.length){
            if(this.state.minDate.year == 0){
                this.minMax();
            }
            this.state.visibleDays.length == 0 ? this.filterDays(this.state.currentYear, this.state.currentMonth) : null;
        }
    }
    minMax(){

        var minYear =  Math.min.apply(Math,this.props.calendar.map(function(item){return item.date.year}))
        var maxYear =  Math.max.apply(Math,this.props.calendar.map(function(item){return item.date.year}))
        var minYearMonths = this.props.calendar.filter((item)=>{
            return item.date.year == minYear;
        })
        var minMonth = Math.min.apply(Math,minYearMonths.map(function(item){return item.date.month}))

        var maxYearMonths = this.props.calendar.filter((item)=>{
            return item.date.year == maxYear;
        })
        var maxMonth = Math.max.apply(Math,maxYearMonths.map(function(item){return item.date.month}))
        this.setState({minDate: {year:minYear, month: minMonth}})
        this.setState({maxDate: {year:maxYear, month: maxMonth}})

    }
    dateToString(month) {
        var monthsArray = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентабрь", "Октябрь", "Ноябрь", "Декабрь"];
        this.setState({stringCurrentMonth: monthsArray[month]});
        this.setState({stringCurrentYear: this.state.currentYear});
    }
    currentDate() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth();

        this.setState({currentYear: year, currentMonth: month})
        this.dateToString(month)
    }
    filterDays(year, month) {

        if(typeof this.state.maxDate == 'undefined' || this.state.maxDate.year == 0){return}
        if(year == this.state.maxDate.year && month == this.state.maxDate.month){
            this.setState({arrowNextActive: false})
        }else{
            this.setState({arrowNextActive: true})
        }
        if(year == this.state.minDate.year && month == this.state.minDate.month){
            this.setState({arrowPrevActive: false})
        }else{
            this.setState({arrowPrevActive: true})
        }

            var ollDays = [];
            var dayInMonth = 32 - new Date(year, month, 32).getDate();
            for (var i = 0; i < dayInMonth; i++) {
                ollDays.push(null);
            }
            var visibleDays = this.props.calendar.filter((item) => {
                return item.date.year == year;
            })
                .filter((item) => {
                    return item.date.month == month;
                }).map(item => {

                    let index = item.date.day - 1;
                    ollDays.splice(index, 1, item)
                })
        this.setState({visibleDays: ollDays});
        this.dateToString(month);


    }
    showPrevMonth(){
        var year = this.state.currentYear;
        var month = this.state.currentMonth;
        if(this.state.currentMonth == 0){

            year = this.state.currentYear - 1;
            month = 11;
            this.setState({currentYear: this.state.currentYear -1});
            this.setState({currentMonth: 11});
            this.filterDays(year, month);
        }else{

            month =  this.state.currentMonth - 1;
            this.setState({currentMonth: (this.state.currentMonth - 1)});
            this.filterDays(year, month);
        }
    }
    showNextMonth(){
        var year = this.state.currentYear;
        var month = this.state.currentMonth;
        if(this.state.currentMonth == 11){
            year = this.state.currentYear + 1;
            month = 0;
            this.setState({currentYear: this.state.currentYear + 1});
            this.setState({currentMonth: 0});
            this.filterDays(year, month);
        }else{
            month =  this.state.currentMonth + 1;
            this.setState({currentMonth: (this.state.currentMonth + 1)});
            this.filterDays(year, month);
        }
    }
    render() {
       var counter = 0;
       var items = this.state.visibleDays.length == 0 ? '' :
           <div>
               {
                   this.state.visibleDays.map(item => {
                       counter++;
                       return item == null ?  <div  key={counter} className="calendar__link calendar__link_disabled" >{counter}</div> : typeof item == 'object' ?
                           <Link  key={item._id} className="calendar__link" to={"calendar/day/" + item._id + ""}>{item.date.day}</Link> : '';
                   })
               }
           </div>

        return (
            <div className="calendar">
                <h1>{this.state.currentYear}</h1>
                <h3>{this.state.stringCurrentMonth}</h3>
                <div className="nav-arrows">
                    <div onClick={this.showPrevMonth.bind(this)} className={this.state.arrowPrevActive ? "nav-arrows__item nav-arrows__item_prev" : "nav-arrows__item nav-arrows__item_disable nav-arrows__item_prev"}>🡄</div>
                    <div onClick={this.showNextMonth.bind(this)} className={this.state.arrowNextActive ? "nav-arrows__item nav-arrows__item_next" : "nav-arrows__item nav-arrows__item_disable nav-arrows__item_next"}>🡆</div>
                </div>
                {items}
            </div>

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
        return {calendar: state.calendar};
    },
    mapDispatchToProps
)(Calendar);
