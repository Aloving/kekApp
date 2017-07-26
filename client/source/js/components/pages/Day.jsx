import React from "react";
import Container from "../cards/Container";
import Header from "../Header";
import {connect} from "react-redux";
import {action_getdayById} from "./../../redux/actions";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Day extends React.Component {
  componentDidMount() {
    document.title = 'Календарь';
    this.props.getdayById({dayId: this.props.match.params.dayId, userId: this.props.userId});
  }

  render() {
    return (
      <div className="day">
        <Header content='Календарь'/>
        <ReactCSSTransitionGroup transitionName="animation-opacity"
                                 transitionAppear={true}
                                 transitionEnterTimeout={800}
                                 transitionLeaveTimeout={800}
                                 transitionAppearTimeout={800}>
          <div>
            <Container userId={this.props.userId} cards={this.props.day}/>
          </div>
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
    return {day: state.days, marks: state.marks};
  },
  mapDispatchToProps
)(Day);

