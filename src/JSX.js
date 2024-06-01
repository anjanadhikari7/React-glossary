import React from "react";

function JSX() {
  return (
    <div>
      <h2>JSX</h2>
      <p>
        JSX (JavaScript XML) is a syntax extension for JavaScript that looks
        similar to HTML. It allows developers to write HTML-like code within
        JavaScript, which is then transformed into React elements.
      </p>
      <p>
        JSX makes writing React components more intuitive by visually combining
        the markup with the logic. For example:
      </p>
      <pre>
        <code>{`const element = <h1>Hello, world!</h1>;`}</code>
      </pre>
    </div>
  );
}

export default JSX;
