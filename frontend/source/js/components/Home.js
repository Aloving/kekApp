import React from 'react';
import Container from './Container';

import Header from './Header'
import {connect} from 'react-redux';


import {action_getdays} from './../redux/actions';


class Home extends React.Component {
    constructor() {
        super();

    }

   
    componentDidMount() {
        this.props.getdays();
        document.title = "Главная";
    }
   

    render() {

        return (
            <div className="home" >
                <Header content='За последние 7 дней'/>
                <Container cards={this.props.days}/>
               
            </div>

        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getdays: () => {
            dispatch(action_getdays());
        },

    };
};

export default connect(
    (state) => {
        return {days: state.days};
    },
    mapDispatchToProps
)(Home);

