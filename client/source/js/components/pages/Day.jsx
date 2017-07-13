import React from "react";
import Container from "../cards/Container";
import Header from "../Header";
import {connect} from "react-redux";
import {action_getdayById} from "./../../redux/actions";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

var daysArr = [];
var dayNow = [];

class Day extends React.Component {
  componentWillMount() {
    document.title = 'Календарь';
    var finded = this.findItem(this.props.params.dayId);
    if (finded) {
      dayNow.push(finded)
    } else {
      this.props.getdayById(this.props.params.dayId);
    }
  }


  findItem(param) {
    if (!daysArr.length) return false;
    var filter = daysArr.filter((item) => {
      return item.id == param;
    })
    if (filter.length) {
      return filter
    }
    else {
      return false
    }
  }

  render() {

    var days;

    if (dayNow.length) {
      days = dayNow;
    }
    else if (this.props.day.length && this.props.day[0].id == this.props.params.dayId) {
      daysArr.push(this.props.day.length);
      days = this.props.day;
    } else {
      days = []
    }

    var content = <div>
                    <Header content='Календарь'/>
                    <Container cards={days}/>
                  </div>


    return (
      <div className="day">
        <ReactCSSTransitionGroup transitionName="animation-opacity"
                                 transitionAppear={true}
                                 transitionEnterTimeout={800}
                                 transitionLeaveTimeout={800}
                                 transitionAppearTimeout={800}>
          {content}
        </ReactCSSTransitionGroup>

      </div>


    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getdayById: (id) => {
      dispatch(action_getdayById(id));
    },


  };
};

export default connect(
  (state) => {
    return {day: state.dayById, marks: state.marks};
  },
  mapDispatchToProps
)(Day);

