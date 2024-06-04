import React, { useState, useEffect } from "react";
import { formatSecondsToJSX } from "../../utils/timeFormat";

interface TimerProps {
  initialSeconds: number;
  children?: React.ReactNode;
  onTimerDone: () => void;
}

const Timer: React.FC<TimerProps> = ({
  initialSeconds,
  children,
  onTimerDone,
}) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let interval: number = 0;
    if (seconds > 0) {
      interval = window.setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else {
      window.clearInterval(interval);
      setFinished(true);
      onTimerDone();
    }
    return () => window.clearInterval(interval);
  }, [seconds]);

  return (
    <>
      {formatSecondsToJSX(seconds)}
      {finished && children}
    </>
  );
};

export default Timer;
