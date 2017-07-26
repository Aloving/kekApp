import React from "react";
import {Link} from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import arrow from "../../../assets/arrow.svg";
import Icon from "../Icon";
import PropTypes from "prop-types";

const CalendarBody = ({items, showPrevMonth, arrowPrevActive, currentMonth, showNextMonth, arrowNextActive}) => {
    var counter = 0;
    var content =
      <div className="calendar__content">
        {
          items.map(item => {
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
          <div onClick={showPrevMonth}
               className={arrowPrevActive ?
                 "nav__arrow nav__arrow_prev" :
                 "nav__arrow  nav__arrow_disable nav__arrow_prev"}><Icon id={arrow.id}/></div>
          <span className="nav__text">{currentMonth}</span>
          <div onClick={showNextMonth}
               className={arrowNextActive ?
                 "nav__arrow nav__arrow_next"
                 : "nav__arrow  nav__arrow_disable nav__arrow_next"}><Icon id={arrow.id}/></div>
        </div>
        {content}
      </ReactCSSTransitionGroup>
    )
}

export default CalendarBody;

CalendarBody.propTypes = {
  items: PropTypes.array,
  currentMonth: PropTypes.string,
  showNextMonth: PropTypes.func,
  showPrevMonth: PropTypes.func,
  arrowPrevActive: PropTypes.bool,
  arrowNextActive: PropTypes.bool,
}
