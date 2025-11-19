import Another from "./components/Another";
import Card from "./components/Card";
import Blog from "./components/Blog";
import { useRef, useState } from "react";


export default function App() {
  //  <div>
  //     <Card title="my title 1" content = "content 1" />
  //     <Card title="my title 2" content = "content 2" />
  //     <Another />
  //   </div>
  // const increment = () => {
  //   setCount(count+1);
  //   console.log("incremented", count);
    
  // };
  // const [count, setCount] = useState(2);
  // return  (
  //   <div>
  //    <h1>{count}</h1>
  //    <button onClick={increment}>+</button>
  //   </div>
  // )
  // const blogs = [
  //   { title: "Title 1", content: "Content 1"},
  //   { title: "Title 2", content: "Content 2"},
  //   { title: "Title 3", content: "Content 3"},
  // ];
  // return <div>
  //   <h1>Blogs</h1>
  //   <hr />
  //   {blogs.map(blog => <Blog title={blog.title} content={blog.content} />) }
  // </div>
  // const data = {
  //   Kerala: "Trivandrum",
  //   Karnataka: "Bangalore",
  //   "Tamil Nadu": "Chennai" 
  // };

  // const [selectedState, setSelectedState] = useState("Kerala");
  // const [selectedStateCapital, setSelectedStateCapital] = useState(data["Kerala"]);

  // const changeState = (e) => {
  //   setSelectedState(e.target.value);
  // };

  // useEffect(() => {
  //   setSelectedStateCapital(data[selectedState]);
  // }, [selectedState]);

  // return (
  //   <div>
  //     <select onChange={changeState} value={selectedState}>
  //       <option value="Kerala">Kerala</option>
  //       <option value="Tamil Nadu">Tamil Nadu</option>
  //       <option value="Karnataka">Karnataka</option>
  //     </select>
  //     <p>Selected State: {selectedState}</p>
  //     <p>Capital of Selected: {selectedStateCapital}</p>
  //   </div>
  // );
  const facts = {
    0: "Lorem ipsum dolor",
    1: "Eos aliquam odit ut perspiciatis voluptates?",
  };
  const [factState, setFactState]=useState();
  const [loading, setLoading] = useState(false);
  const numberRef = useRef();

  const getFact = async () => {
    // setFactState(facts[numberRef.current.value]);
    setLoading(true);
    const number = numberRef.current.value;
    const response = await fetch(`https://api.restful-api.dev/objects/${number}`);
    const text = await response.json();
    setFactState(text.name);
    setLoading(false);
    
  }
  if (loading) {
    return <div>Data is loading from server...</div>
  }
  return (
    <div>
    <input ref={numberRef} type="number" placeholder="Enter a number" />
    <button onClick={getFact}>Get Fact</button>
    <p>{factState}</p>
  </div>
  );
  
  
}
