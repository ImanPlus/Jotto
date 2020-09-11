import React, {Component} from 'react';
import {connect} from 'redux';
import './App.css';

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import {getSecretWord} from "./actions";
import Input from "./input";

export class UnconnectedApp extends Component {
  /**
   * @method componentDidMount
   * @return {undefined}
   */
  componentDidMount() {
  // get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success }/>
        <Input/>
        <GuessedWords guessedWords={this.props.guessedWords}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {success, guessedWords, secretWord} = state;
  return {success, guessedWords, secretWord};
}

export default connect(mapStateToProps, {getSecretWord})(UnconnectedApp);
