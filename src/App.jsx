import { useState } from "react";
import Another from "./components/Another";
import Card from "./components/Card";
import Blog from "./components/Blog";


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
  const blogs = [
    { title: "Title 1", content: "Content 1"},
    { title: "Title 2", content: "Content 2"},
    { title: "Title 3", content: "Content 3"},
  ];
  return <div>
    <h1>Blogs</h1>
    <hr />
    {blogs.map(blog => <Blog title={blog.title} content={blog.content} />) }
  </div>
}
 