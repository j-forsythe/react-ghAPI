import React from 'react';

var Api = React.createClass({

  getInitialState: function() {
    return {
      ghData: []
    };
  },

  componentDidMount: function() {
    this.serverRequest = fetch('https://api.github.com/repos/j-forsythe/red-project3-react/git/trees/master',
    {method: 'GET',
  })
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
          response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
          var apiData = data.tree;
          console.log(apiData);
          console.log(data.tree[2].url);
          this.setState({
            ghData: apiData
          });
        });
        
      }
    )
  },

    componentWillUnmount: function() {
      this.serverRequest.abort();
    },

    render() {
      return (
        <div>
          <p>is this thing on?</p>
        </div>
      )
    }

  });

  module.exports = Api;
