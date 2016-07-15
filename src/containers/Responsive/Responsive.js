import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Activity from '../../containers/Activity/Activity';

function browserSelector({browser}) {
    return {browser}
	}

class Responsive extends Component {
  constructor(props) {
    super(props)
  }
  
    

  render() {


        const {browser} = this.props;

        let message = `The viewport's current media type is: ${browser.mediaType}.`;

        if (browser.lessThan.small) {
            message += 'Secret message for viewports smaller than than the "small" breakpoint!';
        } else if (browser.lessThan.medium) {
            message += 'Secret message for viewports between the "small" and "medium" breakpoints!';
        } else {
            message += 'Message for viewports greater than the "medium" breakpoint.';
        }
	
	
    return (
      <Activity title='Responsive' nav_index='/responsive'>
		  <p>
			{message}         
		  </p>
	  </Activity>
    )
  }
}

Responsive.propTypes = {
  browser: PropTypes.object.isRequired,

}

function mapStateToProps(state) {

	 const { responsiveStateReducer} = state;

	 return {
			
			browser: responsiveStateReducer,
		 };

}




export default connect(mapStateToProps)(Responsive);