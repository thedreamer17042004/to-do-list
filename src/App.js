import React, { useState } from "react";
import "./App.css";
import CardTry from "./components/Props/CardTest";
import TryStyle from "./components/Styles/Style";
import HookSelector from "./components/Hook/useSelector";
import Portal from "./components/Portal/portal";

const App = () => {
  return (
    <div>
      <CardTry />
      <TryStyle />
      <HookSelector />
      <Portal />
    </div>
  );
};

export default App;
