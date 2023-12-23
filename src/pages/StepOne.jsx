import React, { useState } from "react";
import { Heading } from "../components/UI/Heading";
import { AppInput } from "../components/UI/Appinput";
import { ProgressIndicator } from "../components/UI/ProgressIndicator";
import { LinkButton } from "../components/LinkButton";

const StepOne = () => {
  const [answerValue, setAnswerValue] = useState("");

  const [answerError, setAnswerError] = useState(false);

  const clickHandler = () => {
    if (!answerValue) {
      setAnswerError(true);
    } else {
      setAnswerError(false);
    }
  };



  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressIndicator currentStep={1}/>
          <div className="question">
            <Heading Headingtype="h2" headingText="1. Занимательный вопрос" />
            <AppInput
              isRequired={true}
              hasError={answerError}
              value={answerValue}
              inputError="Введите ваш ответ"
              onChange={setAnswerValue}
              inputType="text"
              id="answer"
              inputPlaceholder="Ваш ответ"
            />
            <LinkButton path="/step-two" button-type="submit" onClick={clickHandler} isDisabled={answerValue ? false : true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
