import React, { Fragment } from 'react';

const QuestionField = ({ question, choices, answer, handleSubmit }) => (
  <Fragment>
    <h3>{question}</h3>
    <form onSubmit={handleSubmit}>
      {Object.keys(choices).map(choice => (
        <div key={choice}>
          <input type="radio" name="choice" value={choice} id={choice} />
          <label htmlFor={choice}>{choices[choice]}</label>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  </Fragment>
);

export default QuestionField;
