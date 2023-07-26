import React, { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="bg-black text-white items-center text-center rounded-xl p-10">
        <h1 className=" text-blue-500 w-40 h-40 ml-2 font-bold">{advice}</h1>
        <button
          onClick={getAdvice}
          className="bg-blue-500 p-2 rounded-xl text-black font-bold"
        >
          Get advice
        </button>
        <p className="mt-3">
          Click <span className="text-blue-500">Here</span> to copy advice
        </p>
      </div>
    </div>
  );
}

export default App;
