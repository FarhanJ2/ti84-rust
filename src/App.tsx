import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import {Screen} from "./components/Screen";
import {Button} from "./components/Buttons";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Screen />
      <Button />
    </div>
  );
}

export default App;
