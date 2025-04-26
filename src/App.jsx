//import { useState } from 'react'
import "./App.css";
import { Container, Form } from "./components";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center content-center ">
        <Container>
          <h1 className="text-white mb-24 text-7xl ">SafeNet</h1>
          <Form />
        </Container>
      </div>
    </>
  );
}

export default App;
