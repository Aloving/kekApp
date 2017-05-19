import React from 'react';
import Container from './Container';
import Modal from './Modal';
import {connect} from 'react-redux';
import {action_getdays} from './../redux/actions';
import {action_getmarks} from './../redux/actions';
import {action_addmark} from './../redux/actions';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            openModal: false,
            dayId: ''
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
    getmarks(){
        this.props.getmarks();
    }
    componentDidMount() {
        this.props.getdays();

    }

    render() {

        return (
            <div className="App">
                <header className="header"/>
                <Container openModal={this.openModal.bind(this)} cards={this.props.days}/>
                <Modal dayId={this.state.dayId} addmark={this.props.addmark} marks={this.props.marks} getmarks={this.getmarks.bind(this)} open={this.state.openModal} closeModal={this.closeModal.bind(this)}/>
            </div>


        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getdays: () => {
            dispatch(action_getdays());
        },
        getmarks : () => {
            dispatch(action_getmarks());
        },
        addmark: (title) => {
            dispatch(action_addmark(title))
        }
    };
};

export default connect(
    (state) => {
        return {days: state.days, marks: state.marks};
    },
    mapDispatchToProps
)(App);
