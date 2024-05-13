import Home from "./Home";
import About from "./About";
import ErrorPage from "./ErrorPage";
import FloodReportForm from "./FloodReportForm";
import Tips from "./components/TipsPage";
import FloodDetails from "./components/FloodDetails";


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
  {
    path: "/tips",
    element: <Tips />,
    errorElement : <ErrorPage />,
  },
  {
    path: "/:id",
    element: <FloodDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/report",
    element: <FloodReportForm />,
    errorElement: <ErrorPage />,
  }
];

export default routes;
