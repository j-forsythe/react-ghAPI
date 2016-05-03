import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';


var App = React.createClass({

render() {
  return (
    <div>
    <h1>Hello from React!!!!</h1>
    </div>
  );
}

});

ReactDOM.render(<App />, document.querySelector('#app-node'));
