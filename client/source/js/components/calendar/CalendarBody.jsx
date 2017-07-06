import React from 'react';
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import arrow from '../../../assets/arrow.svg';
import Icon from '../Icon';
import PropTypes from 'prop-types';

class CalendarBody extends React.Component{
    render() {
        var counter = 0;
        var items =
            <div className="calendar__content">
                {
                    this.props.items.map(item => {
                        counter++;
                        return item == null ? <div key={counter} className="calendar__link calendar__link_disabled">{counter}</div> : typeof item == 'object' ?
                            <Link key={item._id} className="calendar__link" to={"calendar/day/" + item._id + ""}>{item.date.day}</Link> : '';
                    })
                }
            </div>

        return (
            <ReactCSSTransitionGroup transitionName="animation-opacity"
                                     transitionAppear={true}
                                     transitionEnterTimeout={400}
                                     transitionLeaveTimeout={400}
                                     transitionAppearTimeout={400}
            >
                    <div className="nav">
                        <div onClick={this.props.showPrevMonth}
                             className={this.props.arrowPrevActive ?
                                 "nav__arrow nav__arrow_prev" :
                                 "nav__arrow  nav__arrow_disable nav__arrow_prev"}><Icon id={arrow.id}/></div>
                        <span className="nav__text">{this.props.currentMonth}</span>
                        <div onClick={this.props.showNextMonth}
                             className={this.props.arrowNextActive ?
                                 "nav__arrow nav__arrow_next"
                                 : "nav__arrow  nav__arrow_disable nav__arrow_next"}><Icon id={arrow.id}/></div>
                    </div>
                    {items}
            </ReactCSSTransitionGroup>

        )

    }
}

export default CalendarBody;

CalendarBody.propTypes = {
    items: PropTypes.array,
    currentMonth : PropTypes.string,
    showNextMonth: PropTypes.func,
    showPrevMonth: PropTypes.func,
    arrowPrevActive: PropTypes.bool,
    arrowNextActive:  PropTypes.bool,
}
