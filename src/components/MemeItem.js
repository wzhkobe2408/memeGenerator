import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMeme } from '../actions';

class MemeItem extends Component {

  constructor() {
    super();
    this.state = {
      hovered:false
    }
  }

  postMeme() {
    const {text0, text1} = this.props;
    const memeObj = {
      template_id:this.props.meme.id,
      text0,
      text1
    }
    this.props.createMeme(memeObj);
  }

  render() {
    const { meme } = this.props;
    return (
      <div
        className='memeItem'
        onMouseEnter = {() =>this.setState({hovered:true})}
        onMouseLeave = {() =>this.setState({hovered:false})}
        onClick = {() => this.postMeme()}
      >
         <img className='memeImg' src={ meme.url } alt={ meme.name } />
          <h3 className={this.state.hovered ? "memeText" : "noText"}>{ meme.name }</h3>
      </div>
    )
  }
}

export default connect(null, {createMeme})(MemeItem);
