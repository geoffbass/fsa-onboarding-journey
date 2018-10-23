import React, { Component, Fragment } from 'react';
import QuestionField from './QuestionField';
import './App.css';
const { planets, questions } = require('./content.json');
const holygrail = planets.holygrail;

class App extends Component {
  constructor() {
    super();
    this.state = {
      planet: holygrail,
      questions,
      currentQuestionIndex: 0,
      questionFieldOpen: false,
    };
    this.answerQuestion = this.answerQuestion.bind(this);
    this.getCurrentQuestion = this.getCurrentQuestion.bind(this);
    this.toggleQuestionField = this.toggleQuestionField.bind(this);
  }

  answerQuestion(submitEvent) {
    submitEvent.preventDefault();
    const submittedChoice = submitEvent.target.choice.value;
    const currentQuestion = this.getCurrentQuestion();
    const correctAnswer = currentQuestion.answer;
    if (submittedChoice === correctAnswer) {
      this.setState(prevState => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        questionFieldOpen: false,
      }));
    } else {
      alert('nope!');
    }
  }

  getCurrentQuestion() {
    return this.state.questions[
      this.state.planet[this.state.currentQuestionIndex]
    ];
  }

  toggleQuestionField() {
    this.setState(prevState => ({
      questionFieldOpen: !prevState.questionFieldOpen,
    }));
  }

  render() {
    const open = this.state.questionFieldOpen;
    return (
      <Fragment>
        {this.state.currentQuestionIndex >= this.state.planet.length ? (
          <h2>You win!</h2>
        ) : (
          <Fragment>
            <h1>Video goes here</h1>
            <button className="toggleBtn" onClick={this.toggleQuestionField}>
              {open ? 'Hide' : 'Show'} Question {open ? 'v' : '>'}
            </button>
            {open && (
              <QuestionField
                {...this.getCurrentQuestion()}
                handleSubmit={this.answerQuestion}
              />
            )}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default App;
