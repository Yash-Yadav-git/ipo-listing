import React, { useEffect, useRef, useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";

const Stepper = ({ stepsConfig = [], isMobile }) => {
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const currStep = useRef(stepsConfig.findIndex((item) => !item.isCompleted));
  const stepRef = useRef([]);

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepRef.current.length - 1].offsetWidth / 2,
    });
  }, [stepRef.current]);

  const calculateProgressWidth = () => {
    return ((currStep.current - 1) / (stepsConfig.length - 1)) * 100;
  };
  console.log("Current step is", currStep.current);
  return (
    <div className="stepper">
      {stepsConfig.map((item, index) => {
        return (
          <div
            key={item.name}
            ref={(el) => (stepRef.current[index] = el)}
            className="step"
          >
            <div
              className={`stepNumber ${item.isCompleted ? "completed" : ""}`}
            >
              {item.isCompleted ? (
                <>
                  <span className="stepperTick">&#10003;</span>
                </>
              ) : (
                <>{index + 1}</>
              )}
            </div>
            <div className="stepName">
              <p className="names">{item.name}</p>
              <p className="values">{item.value}</p>
            </div>
          </div>
        );
      })}
      {isMobile ? (
        <div
          className="prgressBar"
          style={{
            width: `calc(100% - 10px)`,
          }}
        >
          <div
            className="progress"
            style={{
              width: `${calculateProgressWidth()}%`,
            }}
          ></div>
        </div>
      ) : (
        <div
          className="prgressBar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateProgressWidth()}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Stepper;
