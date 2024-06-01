import React from "react";

function Props() {
  return (
    <div>
      <h2>Props</h2>
      <p>
        Props (short for "properties") are inputs to a React component. They are
        passed from a parent component to a child component and are read-only,
        meaning they should not be modified by the child component.
      </p>

      <h3>Passing Props</h3>
      <p>Props are passed to components via HTML attributes:</p>
      <pre>
        <code>
          {`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}`}
        </code>
      </pre>
      <p>
        In the example above, the <code>Welcome</code> component receives the{" "}
        <code>name</code> prop and uses it to render a personalized greeting.
      </p>
    </div>
  );
}

export default Props;
