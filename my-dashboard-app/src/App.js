import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import LeftSidebar from "./components/LeftSidebar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="App">
  <Navbar/>
    <BrowserRouter>
      <div className="flex">
        <LeftSidebar />
        <Routes>
          <Route path="/" element={<RightSidebar/>} />
        
        </Routes>
      </div>
    </BrowserRouter>

      {/* <LeftSidebar/> */}
      {/* <RightSidebar/> */}
    </div>
  );
}

export default App;
