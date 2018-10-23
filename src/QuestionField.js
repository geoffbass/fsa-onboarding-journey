import React, { Fragment } from 'react';

// question, choices, answer

const QuestionField = ({ question, choices, answer }) => (
  <Fragment>
    <h3>{question}</h3>
    <form>
      {choices.map(choice => (
        <div key={choice}>
          <input type="radio" name="choice" value={choice} id={choice} />
          <label htmlFor={choice}>{choice}</label>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  </Fragment>
);

export default QuestionField;
