import { useState } from "react";
import "./App.css";
import { Image } from "~/ui/Image";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <Image
            width={100}
            height={100}
            src="/vite.svg"
            alt="Vite logo"
            className="logo"
          />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <Image
            width={100}
            height={100}
            src="/react.svg"
            alt="React logo"
            className="logo react"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};
