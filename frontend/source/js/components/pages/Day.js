import React from 'react';
import Container from '../cards/Container';


import Header from '../Header'

import {connect} from 'react-redux';

import {action_getdayById} from './../../redux/actions';


import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Day extends React.Component {
    constructor() {
        super();
        this.state = {
            openModal: false,
            dayId: '',
            loaded: false,

        };
    }

   
    componentWillMount() {

        this.props.getdayById(this.props.params.dayId);
    }

    componentDidUpdate() {


        if (document.title == this.props.day[0].date) {
            return;
        }
        else if (this.props.day[0].date != undefined) {
            document.title = this.props.day[0].date;
            this.setState({loaded: true});
        }
    }

    render() {

        var content = this.state.loaded ?

            <div>
              <Header content={this.props.day[0].date}/>
              <Container cards={this.props.day} />
        
            </div>
     : ''

        return (
            <div className="day">
                <ReactCSSTransitionGroup  transitionName="animation-opacity"
                                          transitionAppear={true}
                                          transitionEnterTimeout={800}
                                          transitionLeaveTimeout={800}
                                          transitionAppearTimeout={800}
                >

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
        return {day: state.days, marks: state.marks};
    },
    mapDispatchToProps
)(Day);

