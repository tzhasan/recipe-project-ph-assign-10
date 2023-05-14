import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import HomePage from "../../Pages/HomePage";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import BlogsPage from "../../Pages/BlogsPage";
import ViewRecipes from "../../Pages/ViewRecipes";
import Page404 from "../../Pages/Page404";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ContactUs from "../../Pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Page404></Page404>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blog",
        element: <BlogsPage></BlogsPage>,
      },
      {
        path: 'contact',
        element:<ContactUs></ContactUs>
      },
      {
        path: "viewRecipes/:id",
        element: (
          <PrivetRoute>
            <ViewRecipes></ViewRecipes>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router