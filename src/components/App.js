import React,{ Component } from 'react';
import { connect } from 'react-redux';
import MemeItem from './MemeItem';
import MyMemes from './MyMemes';
import { Button } from 'react-bootstrap';
import '../styles/index.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      memeLimit: 10,
      text0:'',
      text1:''
    }
  }

  handleClick() {
    this.setState({ memeLimit: this.state.memeLimit + 10 });
  }

  render() {
    const { memes } = this.props;
    const memesList = memes.slice(0,this.state.memeLimit).map((meme, index) => {
      return (
        <MemeItem
        meme = {meme}
        key = {index}
        text0 = {this.state.text0}
        text1 = {this.state.text1}
         />
      );
    });

    return (
      <div>
          <h1 className='mb-3'>Welcome to the Meme Generator!</h1>
          <MyMemes />
          <h2>Write Some Text</h2>
          <form className='myForm'>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="Top text"
                  onChange = {(event)=>this.setState({text0:event.target.value})}
                />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Bottom text"
                  onChange = {(event)=>this.setState({text1:event.target.value})}
                 />
              </div>
            </div>
          </form>
        { memesList }
        <br className='br' />
        <Button
          bsStyle="primary"
          className='memeBtn'
          onClick = {() => this.handleClick()}
        >
          Load 10 more memes...
        </Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);
