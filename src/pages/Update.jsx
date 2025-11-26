import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getBlog, updateBlog } from "../api/blog";

export default function Update() {
  const [post, setPost] = useState();
  const { id } = useParams();
  const fetchPost = async () => {
    const data = await getBlog(id);
    setPost(data);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  const navigate = useNavigate();
  const update = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    await updateBlog(id, title, content);
    navigate("/");
  };
  if (!post) {
    return <div>Loading</div>;
  }
  return (
    <form onSubmit={update}>
      <h1>Update Blog</h1>
      <Link to={`/${id}`}>back</Link>
      <br />
      <label htmlFor="title">Title</label>
      <br />
      <input type="text" name="title" defaultValue={post.title} />
      <br />
      <label htmlFor="content">Content</label>
      <br />
      <textarea name="content" id="" defaultValue={post.body}></textarea>
      <br />
      <input type="submit" value="Update" />
    </form>
  );
}
