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

function App() {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}
export default App;
