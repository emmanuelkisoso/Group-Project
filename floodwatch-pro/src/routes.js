import Home from "./Home";
import About from "./About";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  //   {
  //     path: "/tips",

  //     element: <IanTips />,
  //   },
  // {
  //   path: "/:id",
  //   element: <MichelleDetails />,
  // },
];

export default routes;
