var React = require('react');
var PropTypes = React.PropTypes;

var Content = React.createClass({

  getInitialState: function() {
    return {
      tree: [],
      path: ''
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get("https://api.github.com/repos/j-forsythe/red-project3-react/git/trees/532d03099f271f24034fd3c8073cc5b27ed80018", function (result) {
      console.log(result);
      this.setState({
        tree: result,
      });
    }.bind(this));
  },

  componentWillUnmount() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
      </div>
    );
  }

});

module.exports = Content;
