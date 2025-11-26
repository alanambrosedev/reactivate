import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Details from "../pages/Details";
import Blogs from "../pages/Blogs";
import Create from "../pages/Create";
import Update from "../pages/Update";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/posts/:id",
    element: <Details />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "blogs/create",
    element: <Create />,
  },
  {
    path: "blogs/:id/update",
    element: <Update />,
  },
]);

export default router;
