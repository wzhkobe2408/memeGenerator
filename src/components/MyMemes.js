import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCustomMeme } from '../actions';

class MyMemes extends Component {
  render() {
    const myMemes = this.props.myMemes.map((myMeme, index) =>{
      return (
        <div key={index} className='imgBox'>
          <span
            className='glyphicon glyphicon-remove' aria-hidden='true'
            onClick = {() => this.props.removeCustomMeme(myMeme.data.url)}
            ></span>
          <img key={index} src={myMeme.data.url} alt='myMeme' className='MyMeme' />
        </div>
      )
    });
    console.log(myMemes);
    return (
      <div className={myMemes.length === 0 ? "noCustomMeme" : "card myMemes bg-dark text-white" }>
        <div className="card-header">
        <h3>My Custom Meme</h3>
        </div>
        <div className="card-body">
          { myMemes }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    myMemes:state.myMemes
  }
}

export default connect(mapStateToProps,{removeCustomMeme})(MyMemes);
