var React = require('react');
var PropTypes = React.PropTypes;
import Api from './api.jsx';

var list = '';

var Content = React.createClass({

  getInitialState: function() {
    return {
      data: [],
      path: ''
    };
  },

  componentWillReceiveProps(nextProps) {
    this.setState({data: nextProps.ghData});
  },

  componentDidUpdate: function() {
    console.log(this.state.data);
    for (var i=0; i < this.state.data.length; i++) {
      console.log(this.state.data[i].path);
    if (this.state.data[i].type === "tree") {
      console.log(this.state.data[i]);
      
    // this.serverRequest = $.get(this.state.data[i].url, function (result) {
    //   console.log(result);
    //   // this.setState({
    //   //   tree: result,
    //   // });
    // }.bind(this)).done( function(result) {
    //   $.each(result.tree, function(i, el) {
    //     list += '<li>';
    //     list +=   '<p>' + el.path + '</p>';
    //     list += '</li>';
    //   });
    //   $('.secondLevel').append(list);
    // });
  }
  }
  },

  componentWillUnmount() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        <ol className="secondLevel"></ol>
      </div>
    );
  }

});

module.exports = Content;
