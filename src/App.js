import React, { Component, Fragment } from 'react';
import QuestionField from './QuestionField';
import './App.css';

const sampleQuestion = {
  question: 'Which of these is a?',
  choices: ['a', 'b', 'c'],
  answer: 'a',
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      currentQuestionId: 0,
      questionFieldOpen: false,
    };
    this.toggleQuestionField = this.toggleQuestionField.bind(this);
  }

  toggleQuestionField() {
    this.setState(prevState => ({
      questionFieldOpen: !prevState.questionFieldOpen,
    }));
  }

  render() {
    return (
      <Fragment>
        <h1>Video goes here</h1>
        <button onClick={this.toggleQuestionField}>
          {this.state.questionFieldOpen ? 'Hide' : 'Show'} Question
        </button>
        {this.state.questionFieldOpen && <QuestionField {...sampleQuestion} />}
      </Fragment>
    );
  }
}

export default App;
