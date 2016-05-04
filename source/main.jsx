import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory, Redirect } from 'react-router';

import Api from './components/api.jsx';


// var App = React.createClass({
//
// render() {
//   return (
//     <div>
//     <h1>Hello from React!!!!</h1>
//     <Api />
//     </div>
//   );
// }
//
// });

ReactDOM.render(<Api />, document.querySelector('#app-node'));
