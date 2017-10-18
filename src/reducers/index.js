import { combineReducers } from 'redux';
import { RECEIVE_MEMES, NEW_MEME, REMOVE_MEME } from '../actions';

function memes(state = [], action) {
  switch (action.type) {
    case RECEIVE_MEMES:
      return action.memes;
    default:
      return state;
  }
}


function myMemes(state = [], action) {
  switch (action.type) {
    case NEW_MEME:
      return [...state, action.meme];
    case REMOVE_MEME:
      const newMemes = state.filter(function(ele){
        return ele.data.url !== action.url;
      });
      return newMemes;
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  memes,
  myMemes
});

export default rootReducer;
