import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#303030";
      showAlert("Dark Mode has been enabled ", "success");
      // document.title = "Texty - Dark Mode";
      //   setInterval(() => {
      //   document.title = 'Texty is Amazing';
      //      }, 2000);
      //      setInterval(() => {
      //       document.title = 'Install texty';
      //          }, 3000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled ", "success");
      // document.title = "Texty - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TEXTY"
          mode={mode}
          toggleMode={toggleMode}
          abouttext="About Us"
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />}>
              {/* <About mode={mode} /> */}
            </Route>
            <Route
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  mode={mode}
                  heading="Try Texty - Word counter,Character counter , Remove Extra Spaces"
                />
              }
            ></Route>
          </Routes>
        </div>
        
      </Router>
    </>
  );
}

export default App;
// WE HAVE COMPLETED OUT TEXTY HERE !!! YAY!!!!!!!!!!!
