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
    // console.log(this.state.data);
    for (var i=0; i < this.state.data.length; i++) {
      // console.log(this.state.data[i].path);
    if (this.state.data[i].type === "tree") {
      // console.log(this.state.data[i]);


    // treeB = this.state.data[i].url
    treeB.push(this.state.data[i]);
  }

  // return treeB;
  }
  console.log(treeB[0].url);
  },

  // componentDidMount() {
  //   this.serverRequest = $.get(treeB[0].url, function (result) {
  //     console.log(result);
  //   }.bind(this)).done( function(result) {
  //     $.each(result.tree, function(i, el) {
  //       list += '<li>';
  //       list +=  el.path;
  //       list += '</li>';
  //     });
  //     $('.secondLevel').append(list);
  //     list = '';
  //   });
  // },

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
