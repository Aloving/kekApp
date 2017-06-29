import React from 'react';
import Sidebar from './Sidebar';






class App extends React.Component {


    render() {

        return (
            <div className="wrapper">

               <Sidebar/>
               <div className="main">
                   {this.props.children}
               </div>
            </div>




        );
    }
}
export default App;

