import { useContext } from "react";
import CountContext from "../contexts/countContext";
import useCount from "../hooks/useCount";

export default function Counter() {
  const { count, setCount } = useCount();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
