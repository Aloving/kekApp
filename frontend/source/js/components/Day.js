import React from 'react';
import Container from './Container';
import Modal from './Modal';

import {connect} from 'react-redux';

import {action_getdays} from './../redux/actions';
import {action_getdayById} from './../redux/actions';
import {action_getmarks} from './../redux/actions';
import {action_addmark} from './../redux/actions';
import {action_updatelist} from './../redux/actions';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
var counter = 0;

class Day extends React.Component {
    constructor() {
        super();
        this.state = {
            openModal: false,
            dayId: '',
            loaded: false
        };
    }

    openModal(id) {

        this.setState({openModal: true, dayId: id});
        document.body.classList.add('open-modal');
        this.props.getmarks();
    }

    closeModal() {
        this.setState({openModal: false});
        document.body.classList.remove('open-modal');
    }

    getmarks() {
        this.props.getmarks();
    }

    componentWillMount() {
        this.props.getdayById(this.props.params.dayId);
    }

    componentDidUpdate() {


        if (document.title == this.props.day.date) {
            return;
        }
        else if (this.props.day.date != undefined) {
            document.title = this.props.day.date;
            this.setState({loaded: true});
        }
    }

    render() {
        var content = this.state.loaded ?
            <div>
              <Container openModal={this.openModal.bind(this)} cards={this.props.day}/>
            < Modal
        dayId = {this.state.dayId}
        addmark={this.props.addmark}
        marks={this.props.marks}
        getmarks={this.props.getmarks}
        open={this.state.openModal}
        closeModal={this.closeModal.bind(this)}
        updatelist={this.props.updatelist}
    />
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
        getdays: () => {
            dispatch(action_getdays());
        },

        getmarks: () => {
            dispatch(action_getmarks());
        },
        addmark: (title) => {
            dispatch(action_addmark(title))
        },
        updatelist: (data) => {
            dispatch(action_updatelist(data))
        },

    };
};

export default connect(
    (state) => {
        return {day: state.dayById, marks: state.marks};
    },
    mapDispatchToProps
)(Day);

