import React, { useState } from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Fuzzy Store Rating</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}
