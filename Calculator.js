import React, { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        const result = eval(input).toString();
        setHistory([`${input} = ${result}`, ...history]);
        setInput(result);
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className={\`min-h-screen \${darkMode ? "bg-gray-900 text-white" : "bg-[#F3F6F8] text-black"} flex flex-col items-center justify-center p-4\`}>
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded bg-[#0077B5] text-white font-semibold shadow hover:opacity-80"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <h1 className="text-3xl font-bold text-[#0077B5] mb-6">LinkedIn Style Calculator</h1>
      <div className={\`rounded-2xl shadow-lg p-6 w-80 \${darkMode ? "bg-gray-800" : "bg-white"}\`}>
        <div className={\`text-right text-2xl p-4 rounded mb-4 h-16 overflow-x-auto \${darkMode ? "bg-gray-700" : "bg-gray-100"}\`}>
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-3 mb-4">
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(btn)}
              className={\`p-4 rounded-xl text-white font-semibold shadow-md transition hover:opacity-80
                \${btn === "C" ? "bg-red-500" : btn === "=" ? "bg-[#0077B5]" : "bg-[#005983]"}\`}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">History</h2>
          <ul className="max-h-32 overflow-y-auto space-y-1 text-sm">
            {history.length === 0 ? (
              <li className="text-gray-400">No history yet</li>
            ) : (
              history.map((item, idx) => <li key={idx}>{item}</li>)
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
