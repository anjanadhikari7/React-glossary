import React from "react";

function Components() {
  return (
    <div>
      <h2>Components</h2>
      <p>
        React components are the core building blocks of React applications.
        They are small, reusable pieces of code that return a React element to
        be rendered to the page. Components can be written as JavaScript
        functions or ES6 classes.
      </p>

      <h3>Function Component</h3>
      <p>
        Function components are simple JavaScript functions that accept props as
        an argument and return React elements:
      </p>
      <pre>
        <code>
          {`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
        </code>
      </pre>
      <p>
        Function components are ideal for simple components that do not require
        state or lifecycle methods.
      </p>

      <h3>Class Component</h3>
      <p>
        Class components are ES6 classes that extend{" "}
        <code>React.Component</code> and must include a <code>render</code>{" "}
        method that returns a React element:
      </p>
      <pre>
        <code>
          {`class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`}
        </code>
      </pre>
      <p>
        Class components can hold and manage their own state and have access to
        lifecycle methods, making them suitable for more complex components.
      </p>

      <h3>Using Components</h3>
      <p>
        Components can be composed together to build complex UIs. For example:
      </p>
      <pre>
        <code>
          {`function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}`}
        </code>
      </pre>
      <p>
        Components can return other components, arrays, strings, and numbers.
        This composability makes React components powerful and flexible for
        building user interfaces.
      </p>
    </div>
  );
}

export default Components;
