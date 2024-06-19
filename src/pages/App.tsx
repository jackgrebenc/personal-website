import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "./Home";
import TypingTest from "./TypingTest";
import DeepLearningCAE from "./DeepLearningCAE";
import { typingTest, deepLearningCAE } from "../components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
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
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
