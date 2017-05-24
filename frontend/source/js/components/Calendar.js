import React from 'react';
import { Link } from 'react-router'
import Header from './Header';
class Calendar extends React.Component {
    render() {
        return (
        <div className="calendar">
            <h1>Здесь будет календарь</h1>
            <Link activeClassName="nav-item_active" className="nav-item" to="calendar/day/123">День</Link>
        </div>

        )

    }
}

export default Calendar;