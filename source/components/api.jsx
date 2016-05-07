import React from 'react';
import Content from './content.jsx'

var Api = React.createClass({

  getInitialState: function() {
    return {
      ghData: [],
    };
  },

  componentDidMount: function() {
    // this.serverRequest = $.get('https://api.github.com/repos/j-forsythe/red-project3-react/git/trees/master?recursive=1', function (result) {
    //   console.log(result);
    //   this.setState({
    //     ghData: result.tree,
    //   });
    // }.bind(this));
    function get(url) {
      // Return a new promise.
      return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
          // This is called even on 404 etc
          // so check the status
          if (req.status == 200) {
            // Resolve the promise with the response text
            resolve(req.response);
          }
          else {
            // Otherwise reject with the status text
            // which will hopefully be a meaningful error
            reject(Error(req.statusText));
          }
        };

        // Handle network errors
        req.onerror = function() {
          reject(Error("Network Error"));
        };

        // Make the request
        req.send();

      });
    }

    // Use it!
    get('https://api.github.com/repos/j-forsythe/red-project3-react/git/trees/master?recursive=1')
    .then(JSON.parse)
    .then(function(response) {
      console.log("Success!", response);
      return response;
    }, function(error) {
      console.error("Failed!", error);
    }).then(response => {
      this.setState({ghData: response});
    });
    console.log(this.state.ghData);

  },

  // componentWillUnmount: function() {
  //   this.serverRequest.abort();
  // },

  render() {
    return (
      <div>
        <Content ghData={this.state.ghData} />
      </div>
    )
  },

});

module.exports = Api;
