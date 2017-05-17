import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';
import Container from './Container';
import Modal from './Modal';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {middle_getdays} from './../redux/store';

class App extends React.Component {

    componentDidMount(){
        this.props.middle_getdays();
    }
    render() {

        return (
        <div className="App">
            <header className="header"/>
            <Container onDeleteItem={this.deleteItem} cards={this.props.days}/>
            <Modal/>
        </div>


        )
    }
}


export default connect(
    (state) => {return {days: state.days, marks: state.marks};},
    (dispatch) => bindActionCreators({middle_getdays}, dispatch)
)(App);
