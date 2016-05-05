var React = require('react');
var PropTypes = React.PropTypes;
import Api from './api.jsx';

var list = '';
var treeB = [];

var Content = React.createClass({

  getInitialState: function() {
    return {
      data: [],
    };
  },

  componentWillReceiveProps(nextProps) {
    this.setState({data: nextProps.ghData});
  },

  componentDidUpdate: function() {
      $.each(this.state.data, function(i, el) {
        list += '<li>';
        list +=   el.path;
        list += '</li>';
      });
      $('.firstLevel').append(list);
      list = '';

    // for (var i=0; i < this.state.data.length; i++) {
      // console.log(this.state.data[i].path);
      // if (this.state.data[i].type === "tree") {
        // console.log(this.state.data[i]);
    // treeB = this.state.data[i].url
    // treeB.push(this.state.data[i]);
  // }
  // }
  },


  render: function() {
    return (
      <div>
        <ol className="firstLevel"></ol>
      </div>
    );
  }

});

module.exports = Content;
