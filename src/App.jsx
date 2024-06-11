import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState();
  const [err, setErr] = useState();

  function count() {
    try {
      let countNum = eval(num);
      setNum(countNum);
      setErr('Успешно!')
      if (isNaN(countNum)) {
        setErr('Результат неопределён');
        setNum(0)
      }
    } catch (err) {
      setErr('Ошибка ' + err.name + ":" + err.message);
    } finally {
      setTimeout(() => {
        setErr(null)
      }, 4000);
    }
  }

  return (
    <div>
      <input value={num} type="text" onChange={(event) => setNum(event.target.value)} />
      <button onClick={() => count()}>Вычислить</button>
      <p>{err}</p>
    </div>
  );
}

export default App;
