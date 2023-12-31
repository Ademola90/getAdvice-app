import React, { useEffect, useState } from "react";

const App = () => {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(advice)
      .then(() => alert("Advice copied to clipboard!"))
      .catch((error) => console.error("Failed to copy advice:", error));
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="items-center text-center">
        <div className="bg-blue-500 text-white p-10 rounded-xl">
          <h1 className=" w-40 h-40 ml-2 font-bold">{advice}</h1>
        </div>

        <div className="items-center text-center mt-4">
          <button
            onClick={getAdvice}
            className="bg-blue-500 p-2 rounded-xl text-white font-bold"
          >
            Get advice
          </button>
          <p className="mt-3">
            Click{" "}
            <span
              onClick={handleCopyClick}
              className="text-blue-500 font-bold cursor-pointer"
            >
              Here
            </span>
            <span>""</span>to copy advice
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
