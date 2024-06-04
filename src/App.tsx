import WordBox from "./components/typingtest/WordBox";
import TextInput from "./components/typingtest/TextInput";
import { useState } from "react";
import { generate, count } from "random-words";
import Timer from "./components/typingtest/Timer";
import BootstrapModal from "./components/typingtest/BootstrapModal";
import { formatSecondsToJSX } from "./utils/timeFormat";

function App() {
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
  const [state, setState] = useState(initialState);
  const [timing, setTiming] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const resetState = () => {
    window.location.reload();
  };

  const timerInterval = 30;

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

  const onTimerDone = () => {
    setDisabled(true);
  };

  return (
    <div className="main-style">
      <h1>Typing Test</h1>
      <div className="words">
        <div className="time">
          {timing ? (
            <Timer initialSeconds={timerInterval} onTimerDone={onTimerDone}>
              <BootstrapModal
                message="Times up!"
                interval={timerInterval}
                currentIndex={state.currentIndex}
              />
            </Timer>
          ) : (
            formatSecondsToJSX(timerInterval)
          )}
        </div>
        <WordBox items={state.items} highlightIndex={state.currentIndex} />
      </div>

      <div className="chat-bar">
        <TextInput
          initialValue={state.textValue}
          checkValid={checkValid}
          disabled={disabled}
        />
        <button type="button" className="btn btn-primary" onClick={resetState}>
          New Test
        </button>
      </div>
    </div>
  );
}
export default App;
