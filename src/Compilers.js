import React from "react";

function Compilers() {
  return (
    <div>
      <h2>Compilers</h2>
      <p>
        JavaScript compilers transform modern JavaScript code (ES6/ES2015 and
        beyond) into a version of JavaScript that older browsers can understand.
        This process is essential for maintaining compatibility across different
        browsers.
      </p>
      <p>
        The most commonly used compiler in React projects is{" "}
        <strong>Babel</strong>. Babel allows you to use the latest JavaScript
        features without worrying about browser support. It can transform JSX
        syntax into regular JavaScript, which browsers can interpret.
      </p>
      <blockquote>
        <p>
          "Babel is a JavaScript compiler that converts edge JavaScript into
          plain old ES5 JavaScript that can run in any browser (even the old
          ones)." - <a href="https://babeljs.io/">Babel Documentation</a>
        </p>
      </blockquote>
    </div>
  );
}

export default Compilers;
