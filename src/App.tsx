import React, { useMemo, useState } from "react";

const Fruits = React.memo(({ fruits }: { fruits: string[] }) => {
  console.log("Rendue de la liste");
  return (
    <ul className="w-fit flex gap-2">
      {fruits.map((fruit, index) => (
        <li key={index} className="p-2 w-fit bg-violet-200 text-black">
          {fruit}
        </li>
      ))}
    </ul>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  const items = useMemo(() => ["mangue", "patate", "poivre"], []);
  return (
    <div className="w-screen h-screen flex-col gap-4 flex justify-center items-center">
      <p className="text-red-500 bg-black p-4 font-bold">{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="p-2 rounded-md text-white bg-black focus:bg-black/90 cursor-pointer"
      >
        Incremente
      </button>
      <Fruits fruits={items} />
    </div>
  );
}
