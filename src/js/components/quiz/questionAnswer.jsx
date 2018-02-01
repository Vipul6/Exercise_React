import React from 'react';
import _ from 'lodash'

const QuestionTemplate = (props) => {

  return (
        <article className="first-article">
            <div className="question-container">
                <div>
                    <section className="question-number">{props.questionItem.qNo}</section>
                    <section className="question-text">{props.questionItem.question}</section>
                </div>
            </div>
            <div className="options-container">
                <ul>
                    {
                        _.map(props.questionItem.answers, (answer, index) => (
                            <li key={ index+'_3'}>
                                <input type="radio" /><span>{answer}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </article>
            
  );

}

export default QuestionTemplate;