import WordBox from "../components/typingtest/WordBox";
import { useState } from "react";
import { generate } from "random-words";
import Timer from "../components/typingtest/Timer";
import BootstrapModal from "../components/typingtest/BootstrapModal";
import { formatSeconds } from "../utils/timeFormat";

function TypingTest() {
  const getWords = (count: number) => {
    let words = generate(count);
    if (typeof words === "string") {
      return [words];
    }
    return words;
  };

  const displayNumWords = 50;

  const [state, setState] = useState({
    items: getWords(displayNumWords),
    currentIndex: 0,
  });
  const [timing, setTiming] = useState(false);
  const [timerInterval, setTimerInterval] = useState(30);
  const [time, setTime] = useState(timerInterval);
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [score, setScore] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (checkValid(value)) {
      setValue("");
      setScore((currentScore) => currentScore + 1);

      if (state.currentIndex === state.items.length - 1) {
        setState({ items: getWords(displayNumWords), currentIndex: 0 });
      }
    }
  };
  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newTime = parseInt(event.target.value);
    if (isNaN(newTime)) {
      newTime = 0;
    }
    setTimerInterval(newTime);
    setTime(newTime);
  };

  const checkValid = (word: string) => {
    if (!timing && word.length >= 0) {
      setTiming(true);
    }

    if (word === state.items[state.currentIndex]) {
      setState({ ...state, currentIndex: state.currentIndex + 1 });
      return true;
    }
    return false;
  };

  const onFinish = () => {
    setDisabled(true);
    setTiming(false);
    setOpen(true);
  };

  const onNewTest = () => {
    setValue("");
    setDisabled(false);
    setOpen(false);
    setState({ items: getWords(displayNumWords), currentIndex: 0 });
    setTiming(false);
    setTime(timerInterval);
    setScore(0);
  };

  return (
    <div>
      <h1 className="title">Typing Test</h1>

      <WordBox items={state.items} highlightIndex={state.currentIndex} />
      <div className="chat-bar">
        <span>
          <input
            type="text"
            value={value}
            disabled={disabled}
            onChange={handleInputChange}
          />
        </span>
        <span className="timer">
          {timing ? (
            <Timer
              initialSeconds={timerInterval}
              onTimerDone={onFinish}
              setGlobalTime={setTime}
            />
          ) : (
            <div className="input-wrapper">
              <input
                type="text"
                className="input-with-suffix"
                value={timerInterval}
                min="0"
                max="99"
                maxLength={2}
                size={4}
                disabled={disabled}
                onChange={handleTimeChange}
              />
              <span className="suffix">(s)</span>
            </div>
          )}
        </span>
        <button type="button" className="btn btn-danger" onClick={onFinish}>
          End Test
        </button>
        <button type="button" className="btn btn-primary" onClick={onNewTest}>
          New Test
        </button>
        {open && (
          <BootstrapModal
            message="Results are in!"
            interval={timerInterval - time}
            numWords={score}
            onClose={onNewTest}
          />
        )}
      </div>
    </div>
  );
}
export default TypingTest;
