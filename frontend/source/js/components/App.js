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


// div#root {
//     max-width: 992px;
//     margin: 0 auto;
// }

// .sidebar {
//     width: 100px;
//     display: inline-block;
//     height: 100%;
//     background: #25ba9a;
//     padding: 0;
//     position: fixed;
// }

// .home {}

// .home {
//     display: inline-block;
//     width: calc(100% - 100px);
//     vertical-align: top;
// }

// .container {
//     margin: 0;
//     text-align: left;
//     max-width: none;
//     padding-left: 30px;
// }

// a.nav-item {
//     padding: 10px 0;
//     width: 106px;
//     /* height: 100px; */
//     background: transparent;
//     border-radius: 0 5px 5px 0;
// }



// nav-item:before {}

// a.nav-item.nav-item_active {
//     background: #088a6e;
// }

// a.nav-item.nav-item_active:after {
//     width: 0;
//     content: '';
//     background: transparent;
//     height: 0;
//     right: -18px;
//     left: auto;
//     position: absolute;
//     top: calc(50% - 10px);
//     border: 10px solid transparent;
//     border-radius: 0;
//     border-left: #088a6e 8px solid;
// }

// .nav-item:after {
//     content: '';
// }

// .card {
//     background: transparent;
//     box-shadow: none;
//     padding: 0;
// }

// .card__header {
//     /* padding-left: 0; */
//     background: #25ba9a;
// }

// .card__content {
//     background: transparent;
//     padding: 0;
// }

// .item {
//     background: transparent;
//     color: #25ba9a;
// }

// span.item__title {
//     background: transparent;
// }

// .item_total.item.col {}

// span.item__price {
//     background: transparent;
// }

// .item {
//     border: solid 2px #25ba9a;
//     border-radius: 3px;
//     padding: 2px 0;
// }

// .container {
//     padding-left: 147px;
// }

// .card__header {
//     border-radius: 3px;
// }