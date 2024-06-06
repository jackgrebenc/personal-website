import WordBox from "../components/typingtest/WordBox";
import TextInput from "../components/typingtest/TextInput";
import { useState } from "react";
import { generate } from "random-words";
import Timer from "../components/typingtest/Timer";
import BootstrapModal from "../components/typingtest/BootstrapModal";
import { formatSecondsToJSX } from "../utils/timeFormat";

function TypingTest() {
  const getWords = (count: number) => {
    let words = generate(count);
    if (typeof words === "string") {
      return [words];
    }
    return words;
  };

  const initialState = {
    items: getWords(120),
    currentIndex: 0,
    textValue: "",
  };
  const timerInterval = 30;

  const [state, setState] = useState(initialState);
  const [timing, setTiming] = useState(false);
  const [time, setTime] = useState(timerInterval);
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = useState(false);

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
    setDisabled(false);
    setOpen(false);
    setState(initialState);
    setTiming(false);
    setTime(timerInterval);
  };

  return (
    <div>
      <h1 className="title">Typing Test</h1>
      <span className="timer">
        {timing ? (
          <Timer
            initialSeconds={timerInterval}
            onTimerDone={onFinish}
            setGlobalTime={setTime}
          />
        ) : (
          formatSecondsToJSX(time)
        )}
      </span>
      <span className="words">
        <WordBox items={state.items} highlightIndex={state.currentIndex} />
      </span>

      <div className="chat-bar">
        <TextInput
          initialValue={state.textValue}
          checkValid={checkValid}
          disabled={disabled}
        />
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
            currentIndex={state.currentIndex}
            onClose={onNewTest}
          />
        )}
      </div>
    </div>
  );
}
export default TypingTest;
