import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  async function calc() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    console.log("Sent message");
    // const response = await invoke("send_calculation", { num1, num2 });
    // console.log(response);
    setGreetMsg(await invoke("send_calculation", { num1, num2 }));
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p>Add two numbers together</p>

      {/* <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Submit</button>
      </form> */}

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          calc();
        }}
      >
        <input
          id="num1"
          onChange={(e) => setNum1(e.currentTarget.value)}
          placeholder="Enter first number..."
        />
        <input
          id="num2"
          onChange={(e) => setNum2(e.currentTarget.value)}
          placeholder="Enter second number..."
        />
        <button type="submit">Submit</button>
      </form>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
