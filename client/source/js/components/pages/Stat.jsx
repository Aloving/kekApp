import React from 'react';
import Container from '../cards/Container';
import Header from '../Header';
import {connect} from 'react-redux';
import {action_getstat} from '../../redux/actions';

class Stat extends React.Component{
    componentDidMount() {
        this.props.getstat();
        document.title = "Статистика";
    }
    render() {
        return(
            <div className="statistic">
            <Header content="Статистика"/>
                <Container cards={this.props.stat} stat={true}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getstat: () => {
            dispatch(action_getstat());
        }
    };
};

export default connect(
    (state) => {
        return {stat: state.stat};
    },
    mapDispatchToProps
)(Stat);
