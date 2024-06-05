import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "./Home";
import TypingTest from "./TypingTest";
import ProjectsHome from "./ProjectsHome";
import DeepLearningCAE from "./DeepLearningCAE";

function App() {
  return (
    <Router>
      <div className="main-style">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/typing-test" element={<TypingTest />} />
          <Route path="/projects-home" element={<ProjectsHome />} />
          <Route path="/deep-learning-cae" element={<DeepLearningCAE />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
