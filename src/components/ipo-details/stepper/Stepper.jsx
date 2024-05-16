import React, { useEffect, useRef, useState } from "react";
import "./stepper.css";

const Stepper = ({ stepsConfig = [], isMobile }) => {
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const [mobileWidth, setMobileWidth] = useState("");
  const [progressWidth, setProgressWidth] = useState(0);
  const currStep = stepsConfig.findIndex((item) => !item.isCompleted);
  const stepRef = useRef([]);
  const mainStep = useRef();

  useEffect(() => {
    console.log("Values are ", mainStep.current.offsetHeight);
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepRef.current.length - 1].offsetWidth / 2,
    });

    setMobileWidth(
      isMobile ? mainStep.current.offsetHeight : mainStep.current.offsetWidth
    );
    let arr = stepRef.current.splice(0, currStep);
    arr = arr.length === 0 ? stepRef.current : arr;
    const width = arr.reduce((acc, curr, index, arr) => {
      if (index === 0 || index === arr.length - 1) {
        return (acc += curr.offsetWidth / 2);
      }
      return (acc += curr.offsetWidth);
    }, 0);
    setProgressWidth(width);
  }, [stepRef.current, mainStep.current, isMobile]);

  const calculateProgressWidth = () => {
    if (currStep === -1) return 100;
    return ((currStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  return (
    <div className="stepper" ref={mainStep}>
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
            width: `calc(${mobileWidth - 27}px)`,
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
