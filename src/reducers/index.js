import {combineReducers} from "redux";
import success from "./successReducer";
import guessedWords from './guessedWordsReducer';
import secretWord from './guessedWordsReducer';

export default combineReducers({
  success,
  guessedWords,
  secretWord,
});

