import React from 'react';
import Container from '../cards/Container';
import Header from '../Header'
import {connect} from 'react-redux';
import {action_getdays} from '../../redux/actions';

class Home extends React.Component {
    componentDidMount() {
        console.log(this.props.userId);
        this.props.getdays({userId: this.props.userId});
        document.title = "Главная";
    }

    render() {
        return (
            <div className="home" >
                <Header content='За последние 7 дней'/>
                <Container userId={this.props.userId} cards={this.props.days}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getdays: (data) => {
            dispatch(action_getdays(data));
        },
    };
};

export default connect(
    (state) => {
        return {days: state.days};
    },
    mapDispatchToProps
)(Home);

