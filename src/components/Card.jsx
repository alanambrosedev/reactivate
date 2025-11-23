import { useContext } from "react";
import CountContext from "../contexts/countContext";
import useCount from "../hooks/useCount";

function InnerCard({ count }) {
  return <span>Span count is {count}</span>;
}
export default function Card() {
  const { count, setCount } = useCount();
  return (
    // <div className={card}>
    //   <h1>{title}</h1>
    //   <p>{content}</p>
    // </div>
    <div>
      <h1>My Card</h1>
      <hr />
      <p>Current Count is: {count} </p>
      <InnerCard count={count} />
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
