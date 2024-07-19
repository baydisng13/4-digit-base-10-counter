import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);
  const [isIncrementing, setIsIncrementing] = useState(false);
  const [isDecrementing, setIsDecrementing] = useState(false);
  const [incrementTimeout, setIncrementTimeout] = useState<NodeJS.Timeout | null>(null);
  const [decrementTimeout, setDecrementTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let interval:any;
    if (isIncrementing) {
      interval = setInterval(() => {
        setState((p) => (p >= 9999 ? 0 : p + 1));
      }, 300);
    } else if (isDecrementing) {
      interval = setInterval(() => {
        setState((p) => (p <= 0 ? 9999 : p - 1));
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isIncrementing, isDecrementing]);

  const startIncrement = () => {
    const timeout = setTimeout(() => setIsIncrementing(true), 300);
    setIncrementTimeout(timeout);
  };

  const startDecrement = () => {
    const timeout = setTimeout(() => setIsDecrementing(true), 300);
    setDecrementTimeout(timeout);
  };

  const stopIncrement = () => {
    if (incrementTimeout) {
    clearTimeout(incrementTimeout);
    }
    setIsIncrementing(false);
  };

  const stopDecrement = () => {
    if (decrementTimeout) {
      clearTimeout(decrementTimeout);
    }
    setIsDecrementing(false);
  };

  return (
    <div className="flex flex-col justify-center w-full h-screen gap-40">
      <h1 className="text-4xl font-bold">4 Digit Base-10 Counter </h1>

      <div className="flex items-center justify-center gap-4">
        {state >9999 && (
        <div className="h-56 gap-2 px-10 overflow-hidden bg-red-200">
          <div
            className="flex flex-col items-center transition-all duration-500"
            style={{
              transform: `translateY(-${
                Math.floor((state / 10000) % 10) * 210
              }px)`,
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <span key={index} className="font-bold text-[140px]">
                {item}
              </span>
            ))}
          </div>
        </div>
        )}
        {state > 999 && (
        <div className="h-56 gap-2 px-10 overflow-hidden bg-red-200">
          <div
            className="flex flex-col items-center transition-all duration-500"
            style={{
              transform: `translateY(-${
                Math.floor((state / 1000) % 10) * 210
              }px)`,
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <span key={index} className="font-bold text-[140px]">
                {item}
              </span>
            ))}
          </div>
        </div>
        )}
        {state > 99 && (
        <div className="h-56 gap-2 px-10 overflow-hidden bg-red-200">
          <div
            className="flex flex-col items-center transition-all duration-500"
            style={{
              transform: `translateY(-${
                Math.floor((state / 100) % 10) * 210
              }px)`,
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <span key={index} className="font-bold text-[140px]">
                {item}
              </span>
            ))}
          </div>
        </div>
        )}

        {state > 9 && (
        <div className="h-56 gap-2 px-10 overflow-hidden bg-red-200">
          <div
            className="flex flex-col items-center transition-all duration-500"
            style={{
              transform: `translateY(-${
                Math.floor((state / 10) % 10) * 210
              }px)`,
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <span key={index} className="font-bold text-[140px]">
                {item}
              </span>
            ))}
          </div>
        </div>
        )}
        <div className="h-56 gap-2 px-10 overflow-hidden bg-red-200">
          <div
            className="flex flex-col items-center transition-all duration-500"
            style={{ transform: `translateY(-${(state % 10) * 210}px)` }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <span key={index} className="font-bold text-[140px]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-colors bg-black border rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground"
          onMouseDown={startDecrement}
          onMouseUp={stopDecrement}
          onMouseLeave={stopDecrement}
          onClick={() => {
            if (!isDecrementing) {
              setState((p) => (p <= 0 ? 9999 : p - 1));
            }
          }}
        >
          -
        </button>

        <button
          className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white transition-colors bg-black border rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground"
          onMouseDown={startIncrement}
          onMouseUp={stopIncrement}
          onMouseLeave={stopIncrement}
          onClick={() => {
            if (!isIncrementing) {
              setState((p) => (p >= 9999 ? 0 : p + 1));
            }
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
