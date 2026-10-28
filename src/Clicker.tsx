import { useRef, useEffect, useState } from "react";

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

  const buttonRef = useRef<HTMLButtonElement>(null);
  console.log(buttonRef);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "papayawhip";
      buttonRef.current.style.color = "salmon";
    }
    return () => {
      localStorage.removeItem(keyName);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(keyName, String(count));
  }, [count]);

  const buttonClick = () => {
    setCount(count + 1);
    increment();
  };
  return (
    <>
      <div style={{ color: color }}>Количество нажатий: {count}</div>
      <button ref={buttonRef} onClick={buttonClick}>
        Нажми меня
      </button>
    </>
  );
}
