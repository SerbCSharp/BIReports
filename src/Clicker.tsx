import { useEffect, useState } from "react";

export default function () {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UseEffect");
  });

  const buttonClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>Количество нажатий: {count}</div>
      <button onClick={buttonClick}>Нажми меня</button>
    </>
  );
}
