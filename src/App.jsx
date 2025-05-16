//import { useState } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Form, Dashboard, Home } from "./components";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route
        path="/Dashboard"
        element={<Dashboard/>}
      />
    </Routes>
  );
}

export default App;
