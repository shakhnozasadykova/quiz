import React from "react";
import { Heading } from "../components/UI/Heading";
import { LinkButton } from "../components/LinkButton";
import { ProgressIndicator } from "../components/UI/ProgressIndicator";



const StepFour = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
        <ProgressIndicator currentStep={4} />
          <div className="question">
          <Heading headingTag="h2" headingText="Вопрос номер 4" />
            <ul className="level-variants">
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-1" />
                <label htmlFor="variant-1">1</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-2" />
                <label htmlFor="variant-2">2</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-3" />
                <label htmlFor="variant-3">3</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-4" />
                <label htmlFor="variant-4">4</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-5" />
                <label htmlFor="variant-5">5</label>
              </li>
            </ul>
            <LinkButton path="/thanks"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
