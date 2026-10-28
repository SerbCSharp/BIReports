import { useState } from "react";
import Clicker from "./Clicker.tsx";
import People from "./People.tsx";

export default function App({
  clickersCount,
  children,
}: {
  clickersCount: number;
  children?: React.JSX.Element;
}) {
  const [hasClicker, sethasClicker] = useState(true);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const clickerClick = () => {
    sethasClicker(!hasClicker);
  };

  return (
    <>
      {children}
      <div>Total count: {count}</div>
      <button onClick={clickerClick}>
        {hasClicker ? "Hide" : "Show"} Clicker
      </button>
      {hasClicker &&
        [...Array(clickersCount)].map((_, index) => (
          <Clicker
            key={index}
            keyName={`count${index}`}
            color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}
            increment={increment}
          />
        ))}
      <People />
    </>
  );
}
