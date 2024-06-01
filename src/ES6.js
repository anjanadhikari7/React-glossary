import React from "react";

function ES6() {
  return (
    <div>
      <h2>ES6, ES2015, ES2016, etc.</h2>
      <p>
        ES6 (ECMAScript 2015) is a significant update to JavaScript that
        includes dozens of new features and improvements. These updates make
        writing JavaScript easier and more powerful. Some of the key features
        include:
      </p>
      <ul>
        <li>
          <strong>Arrow Functions:</strong> A concise syntax for writing
          function expressions. They also do not have their own `this` context.
        </li>
        <li>
          <strong>Classes:</strong> A new syntax for creating objects and
          handling inheritance.
        </li>
        <li>
          <strong>Template Literals:</strong> Allow embedded expressions and
          multi-line strings using backticks (`).
        </li>
        <li>
          <strong>Let and Const Statements:</strong> Block-scoped variable
          declarations, with `const` for constants.
        </li>
      </ul>
      <p>
        These features, among others, help developers write cleaner and more
        maintainable code. For more detailed information, you can refer to the{" "}
        <a href="https://www.ecma-international.org/ecma-262/6.0/">
          official ES6 documentation
        </a>
        .
      </p>
    </div>
  );
}

export default ES6;
