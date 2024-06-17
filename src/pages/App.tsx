import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "./Home";
import TypingTest from "./TypingTest";
import DeepLearningCAE from "./DeepLearningCAE";
import { typingTest, deepLearningCAE } from "../components/Projects";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="main-contents">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/typing-test"
              element={<TypingTest title={typingTest.title} />}
            />
            <Route
              path="/deep-learning-cae"
              element={<DeepLearningCAE title={deepLearningCAE.title} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
