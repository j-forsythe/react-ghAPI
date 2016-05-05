var React = require('react');
var PropTypes = React.PropTypes;

var Content = React.createClass({

  getInitialState: function() {
    return {
      tree: '',
      path: ''
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      tree: nextProps.response[2].url,
      path: nextProps.response[0].path
    });
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.state.tree, function (result) {
      console.log(result);
      // this.setState({
      //   ghData: result.tree,
      // });
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        {this.state.tree}
        {this.state.path}
      </div>
    );
  }

});

module.exports = Content;
