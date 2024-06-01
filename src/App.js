import React from "react";
import "./App.css";
import SinglePageApplication from "./SinglePageApplication";
import ES6 from "./ES6";
import Compilers from "./Compilers";
import Bundlers from "./Bundlers";
import PackageManagers from "./PackageManagers";
import CDN from "./CDN";
import JSX from "./JSX";
import Elements from "./Elements";
import Components from "./Components";
import Props from "./Props";

function App() {
  return (
    <div className="App">
      <h1>Glossary of React Terms</h1>
      <SinglePageApplication />
      <ES6 />
      <Compilers />
      <Bundlers />
      <PackageManagers />
      <CDN />
      <JSX />
      <Elements />
      <Components />
      <Props />
    </div>
  );
}

export default App;
