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
    var finded = this.findItem(this.props.match.params.dayId);
    if (finded) {
      dayNow = finded;
    } else {
      this.props.getdayById({dayId: this.props.match.params.dayId, userId: this.props.userId});
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
    else if (this.props.day.length) {
     
      daysArr.push(this.props.day[0]);
      days = this.props.day;
    } else {
      days = []
    }
console.log(days);

    var content = <div>
                    <Header content='Календарь'/>
                    <Container userId={this.props.userId} cards={days}/>
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
    getdayById: (data) => {
      dispatch(action_getdayById(data));
    },


  };
};

export default connect(
  (state) => {
    return {day: state.dayById, marks: state.marks};
  },
  mapDispatchToProps
)(Day);

