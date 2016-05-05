import React from 'react';
import Content from './content.jsx'

var list = '';

var Api = React.createClass({


  getInitialState: function() {
    return {
      ghData: [],
    };
  },
  componentDidMount: function() {
    this.serverRequest = $.get('https://api.github.com/repos/j-forsythe/red-project3-react/git/trees/master', function (result) {
      console.log(result.tree);
      this.setState({
        ghData: result.tree,
      });
    }.bind(this)
  ).done( function(result) {
    $.each(result.tree, function(i, el) {
      list += '<li>';
      list +=   '<p>' + el.path + '</p>';
      list += '</li>';
    });
    $('.tree').append(list);
  });

},

componentWillUnmount: function() {
  this.serverRequest.abort();
},

render() {
  return (
    <div>
      <Content />
      <ol className='tree'></ol>
    </div>
  )
},


});

module.exports = Api;
