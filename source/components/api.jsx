import React from 'react';
import Content from './content.jsx'

var Api = React.createClass({


  getInitialState: function() {
    return {
      ghData: [],
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get('https://api.github.com/repos/j-forsythe/red-project3-react/git/trees/master?recursive=1', function (result) {
      console.log(result);
      this.setState({
        ghData: result.tree,
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render() {
    return (
      <div>
        {/*<ul className='firstLevel'></ul>*/}
        <Content ghData={this.state.ghData} />
      </div>
    )
  },

});

module.exports = Api;
