import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="text-custom-blue">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-custom-blue">
        Click on the Vite and React logos to learn more
      </p>
      <main>
        <div className="text-custom-blue">테일윈드 확인용</div>
      </main>
    </>
  );
}
