import React from 'react';
import Container from './Container';
import Modal from './Modal';
import {connect} from 'react-redux';
import {action_getdays} from './../redux/actions';
import {action_getmarks} from './../redux/actions';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            openModal: false
        };
    }

    openModal() {
        this.setState({openModal: true});
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
        console.log(this.state.openModal);
        return (
            <div className="App">
                <header className="header"/>
                <Container openModal={this.openModal.bind(this)} cards={this.props.days}/>
                <Modal marks={this.props.marks} getmarks={this.getmarks.bind(this)} open={this.state.openModal} closeModal={this.closeModal.bind(this)}/>
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
        }
    };
};

export default connect(
    (state) => {
        return {days: state.days, marks: state.marks};
    },
    mapDispatchToProps
)(App);
