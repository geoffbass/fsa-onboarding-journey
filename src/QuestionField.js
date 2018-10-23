import React, { Fragment } from 'react';

const QuestionField = ({ question, choices, answer, handleSubmit }) => (
  <Fragment>
    <h3>{question}</h3>
    <form onSubmit={handleSubmit}>
      {Object.keys(choices).map(choice => (
        <div key={choice} className="radio">
          <label>
            <input type="radio" name="choice" value={choice} id={choice} />
            {choices[choice]}
          </label>
        </div>
      ))}
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  </Fragment>
);

export default QuestionField;
