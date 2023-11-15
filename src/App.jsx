import { useState } from "react";
import "./App.css";
import Inputbir from "./components/Inputbir";
import Inputiki from "./components/Inputiki";
import AddBtn from "./components/AddBtn";
import SubBtn from "./components/SubBtn";
import MultiplyBtn from "./components/MultiplyBtn";
import DivisedBtn from "./components/DivisedBtn";
import Result from "./components/Result";

function App() {
  let [result, setresult] = useState(0)
  let [inputbir, setinputbir] = useState(0);
  let [inputiki, setinputiki] = useState(0);


  return (
    <>
      <Inputbir inputbir={inputbir}  setinputbir={setinputbir} />
      <Inputiki inputiki={inputiki} setinputiki={setinputiki} /> 
      <Result result={result} setresult={setresult} />
      <AddBtn  inputbir={inputbir} inputiki={inputiki} result={result} setresult={setresult} />
      <SubBtn  inputbir={inputbir} inputiki={inputiki} result={result} setresult={setresult} />
      <MultiplyBtn  inputbir={inputbir} inputiki={inputiki} result={result} setresult={setresult} />
      <DivisedBtn  inputbir={inputbir} inputiki={inputiki} result={result} setresult={setresult} />

    </>
  );
}

export default App;
