import React, {  Component, PropTypes } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';

class Search extends Component{
  constructor(props) {
    super(props)
  };

  render(){

    const { messages,  items , appStyle, handleSearchRequest} = this.props
    const alternateTextColor=appStyle.theme.source.palette.alternateTextColor;

    function handleKeyDown(event, value){

      if(event && event.keyCode!==13){
        return;
      }

      handleSearchRequest(value);
    }

    return (
      <div>
        <TextField
          ref='search'
          hintStyle={{color:alternateTextColor}}
          inputStyle={{color:alternateTextColor}}
          hintText={messages.search||'search'}
          onKeyDown ={ (event)=>{handleKeyDown(event, this.refs.search.input.value)}}
          />
        <IconButton
          onClick={()=>handleSearchRequest(this.refs.search.input.value)}>
          <ActionSearch color={alternateTextColor}/>
        </IconButton>
      </div>
    );
  }
};

Search.propTypes = {
  messages: PropTypes.object.isRequired,
  appStyle: PropTypes.object.isRequired,
  handleSearchRequest: PropTypes.func.isRequired,
}

export default (Search);