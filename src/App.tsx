import { useMemo, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const expensiveCalculation = (num: number) => {
    console.log("Calcul en cours...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };
  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <section className="w-sm bg-blue-200 rounded-2xl p-5 flex flex-col items-center justify-center">
        <h1 className="">Count: {count}</h1>
        <button
          className="p-2 rounded-md bg-black text-white font-bold cursor-pointer"
          onClick={() => setCount(count + 1)}
        >
          Incrémenter
        </button>
        <p>Résultat : {memoizedValue}</p>
      </section>
    </div>
  );
}
