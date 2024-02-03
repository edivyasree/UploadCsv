import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import LeftSidebar from "./components/LeftSidebar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";
import RightSidebar1 from "./components/RightSidebar1";

function App() {
  return (
    <div className="App">
  <Navbar/>
    {/* <BrowserRouter>
      <div className="flex">
        <LeftSidebar />
        <Routes>
          <Route path="/" element={<RightSidebar/>} />
        
        </Routes>
      </div>
    </BrowserRouter> */}

      {/* <LeftSidebar/> */}
      <RightSidebar1/>
     
    </div>
  );
}

export default App;
