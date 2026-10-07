export default function () {
  let count = 0;

  const buttonClick = () => {
    console.log('Кнопка нажата')
  }
  return (
    <>
      <div>Количество нажатий: {count}</div>
      <button onClick={ buttonClick }>Нажми меня</button>
    </>
  );
}
