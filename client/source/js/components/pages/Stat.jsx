import React from 'react';
import Container from '../cards/Container';
import Header from '../Header';
import {connect} from 'react-redux';
import {action_getstat, action_clear_stat} from '../../redux/actions';

class Stat extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    componentWillMount() {
        this.props.getStat({userId: this.props.userId});
        document.title = "Статистика";


    }

    componentWillUnmount(){
        this.props.clearStat();
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
        getStat: (data) => {
            dispatch(action_getstat(data));
        },
      clearStat: () => {
        dispatch(action_clear_stat());
      }
    };
};

export default connect(
    (state) => {
        return {stat: state.stat};
    },
    mapDispatchToProps
)(Stat);
