var React = require('react');
var PropTypes = React.PropTypes;
import Api from './api.jsx';

var list = '';

var Content = React.createClass({

  // getInitialState: function() {
  //   return {
  //     data: [],
  //   };
  // },
  //
  // componentWillReceiveProps(nextProps) {
  //   this.setState({data: nextProps.ghData});
  // },


  render: function() {
    return (
      <ul className="firstLevel">
        {this.props.ghData.map((el, i)=>{
          return <div key={i} >{el.path}</div>

        })}
      </ul>
    );
  }

});

module.exports = Content;
