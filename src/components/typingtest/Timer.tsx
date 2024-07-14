import React, { useState, useEffect } from "react";
import { formatSecondsToJSX } from "../../utils/timeFormat";

interface TimerProps {
  initialSeconds: number;
  on: boolean;
  onTimerDone: () => void;
  setGlobalTime: (seconds: number) => void;
}

const Timer: React.FC<TimerProps> = ({
  initialSeconds,
  on = false,
  onTimerDone,
  setGlobalTime,
}) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (!on) {
      setSeconds(initialSeconds);
    }
    if (on) {
      let interval: number = 0;
      if (seconds > 0) {
        interval = window.setInterval(() => {
          setSeconds(seconds - 1);
        }, 1000);
        setGlobalTime(seconds);
      } else {
        window.clearInterval(interval);
        setSeconds(0);
        setGlobalTime(0);
        onTimerDone();
      }

      return () => window.clearInterval(interval);
    }
  }, [seconds, on]);

  return <>{formatSecondsToJSX(seconds)}</>;
};

export default Timer;
