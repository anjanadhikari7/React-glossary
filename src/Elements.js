import React from "react";

function Elements() {
  return (
    <div>
      <h2>Elements</h2>
      <p>
        React elements are the building blocks of React applications. An element
        describes what you want to see on the screen and is immutable, meaning
        it cannot be changed once it is created.
      </p>
      <p>
        A React element is a plain object, which represents a DOM node or
        component. For example:
      </p>
      <pre>
        <code>{`const element = <h1>Hello, world!</h1>;`}</code>
      </pre>
      <p>
        React elements are usually created by using JSX, but they can also be
        created using <code>React.createElement()</code> directly.
      </p>
    </div>
  );
}

export default Elements;
