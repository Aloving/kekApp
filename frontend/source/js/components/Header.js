import React from 'react';
import { Link, IndexLink } from 'react-router'
import calendar_img from '../../assets/calendar.svg';
import stat_img from '../../assets/stat.svg';
import home_img from '../../assets/home.svg';

class Header extends React.Component{


    render() {
        return(
            <div className="header" >
                <Link activeClassName="nav-item_active" className="nav-item" to="/stat"><img className="nav-item__img nav-item__img_stat " src={stat_img}/></Link>
                <IndexLink  activeClassName="nav-item_active" className="nav-item" to="/" ><img className="nav-item__img nav-item__img_home" src={home_img}/></IndexLink>
                <Link activeClassName="nav-item_active"  className="nav-item" to="/calendar"><img className="nav-item__img nav-item__img_calendar" src={calendar_img}/></Link>
            </div>
        )
    }
}

export default Header;