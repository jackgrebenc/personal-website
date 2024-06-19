import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "./Home";
import TypingTest from "./TypingTest";
import DeepLearningCAE from "./DeepLearningCAE";
import InstrumentPricer from "./InstrumentPricer";
import {
  typingTest,
  deepLearningCAE,
  instrumentPricer,
} from "../components/Projects";
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
            path={typingTest.link}
            element={<TypingTest title={typingTest.title} />}
          />
          <Route
            path={deepLearningCAE.link}
            element={<DeepLearningCAE title={deepLearningCAE.title} />}
          />
          <Route
            path={instrumentPricer.link}
            element={<InstrumentPricer title={instrumentPricer.title} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
