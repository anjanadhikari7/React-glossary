import React from "react";

function Bundlers() {
  return (
    <div>
      <h2>Bundlers</h2>
      <p>
        Bundlers are tools that take your JavaScript and CSS code written as
        separate modules and combine them into a few optimized files for the
        browser. This helps in managing dependencies and improving load times.
      </p>
      <ul>
        <li>
          <strong>Webpack:</strong> A powerful and flexible bundler widely used
          in the React ecosystem. It offers a range of plugins and loaders to
          handle different types of assets.
        </li>
        <li>
          <strong>Browserify:</strong> A simpler alternative that allows you to
          use Node.js-style `require()` calls in the browser.
        </li>
      </ul>
      <p>
        By using bundlers, developers can ensure that their code is modular,
        maintainable, and performs well in production environments.
      </p>
    </div>
  );
}

export default Bundlers;
