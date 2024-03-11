import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainSite from "./pages/MainSite";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import CreatePost from "./pages/CreatePost/CreatePost";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
