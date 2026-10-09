import { useEffect, useState } from "react";

export default function ({
  keyName,
  color,
  increment,
}: {
  keyName: string;
  color: string;
  increment: () => void;
}) {
  const [count, setCount] = useState(
    Number(localStorage.getItem(keyName)) || 0,
  );

  useEffect(() => {
    return () => {
      localStorage.removeItem(keyName);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(keyName, String(count));
  }, [count]);

  const buttonClick = () => {
    setCount(count + 1);
    increment()
  };
  return (
    <>
      <div style={{ color: color }}>Количество нажатий: {count}</div>
      <button onClick={buttonClick}>Нажми меня</button>
    </>
  );
}
