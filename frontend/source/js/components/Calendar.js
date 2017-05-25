import React from 'react';
import { Link } from 'react-router'
import Header from './Header';
import ghost from './../../assets/ghost.png';

class Calendar extends React.Component {
    componentDidMount() {
        document.title = "Календарь";
    }
    render() {
        return (
        <div className="calendar">
            <h1>Здесь будет календарь</h1>
            <img src={ghost}/>
            <Link activeClassName="nav-item_active" className="nav-item" to="calendar/day/123">День</Link>
        </div>

        )

    }
}

export default Calendar;