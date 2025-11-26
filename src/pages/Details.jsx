import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteBlog, getBlog } from "../api/blog";

export default function Details() {
  const [post, setPost] = useState();
  const { id } = useParams();

  const fetchPost = async () => {
    // ❌ OLD: const res = await getBlog(id);
    // ❌ OLD: const data = await res.json();

    // ✅ NEW: Assume getBlog returns the final parsed data
    const data = await getBlog(id);

    setPost(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  const onDelete = async () => {
    await deleteBlog(id);
  };
  if (!post) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <Link to="/posts">Back</Link>
      <hr />
      <p>{post.body}</p>
    </div>
  );
}
