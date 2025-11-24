import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      <ol>
        {posts.map((post) => (
          <li>
            <Link to={`${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
      <Link to="/">Home</Link>
      <hr />
    </div>
  );
}
