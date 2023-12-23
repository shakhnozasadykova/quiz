import React from "react";

export const ProgressIndicator = ({ currentStep }) => {
  const indicatorStep = [1, 2, 3, 4];
  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">
          Скидка за прохождение опроса:
        </span>
        <span className="indicator__value">15%</span>
      </div>
      <div className="indicator__progressbar">
        {indicatorStep.map((val, idx) => (
          <div
            className={`indicator_unit indicator_unit-1 ${idx < currentStep && "_active"}`}
          />
        ))}
      </div>
    </div>
  );
};