import React from "react";

function PackageManagers() {
  return (
    <div>
      <h2>Package Managers</h2>
      <p>
        Package managers are tools that allow you to manage dependencies in your
        project. They help in installing, updating, and configuring the
        libraries and frameworks that your project depends on.
      </p>
      <ul>
        <li>
          <strong>npm:</strong> The default package manager for Node.js and the
          largest software registry.
        </li>
        <li>
          <strong>Yarn:</strong> An alternative to npm, developed by Facebook,
          that focuses on speed and reliability.
        </li>
      </ul>
      <p>
        Both npm and Yarn help developers manage the lifecycle of their
        dependencies, making it easier to maintain consistent environments and
        streamline the development process.
      </p>
    </div>
  );
}

export default PackageManagers;
