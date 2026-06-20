import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import FrontPage from "./components/frontpage";
import Main from "./components/App";
import { Login } from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
function App() {
  return (
    <>
      <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<FrontPage />} />

        <Route path="/main" element={
          <Main />
      } />
    
      </Routes>
    </Router>
    </>
  );
}

export default App;
