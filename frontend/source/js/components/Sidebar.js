import React from 'react';
import { Link, IndexLink } from 'react-router'
import calendar_img from '../../assets/calendar.svg';
import stat_img from '../../assets/stat.svg';
import home_img from '../../assets/home.svg';
import Icon from './Icon'
class Sidebar extends React.Component{


    render() {
        return(
            <div className="sidebar" >
                <IndexLink  activeClassName="nav-item_active" className="nav-item" to="/" ><span className="nav-item__img nav-item__img_home"><Icon id={home_img.id} /></span></IndexLink>
                <Link activeClassName="nav-item_active"  className="nav-item" to="/calendar"><span className="nav-item__img nav-item__img_calendar"><Icon  id={calendar_img.id}/></span></Link>
                <Link activeClassName="nav-item_active" className="nav-item" to="/stat"><span className="nav-item__img nav-item__img_stat "><Icon  id={stat_img.id}/></span></Link>
            </div>
        )
    }
}

export default Sidebar;