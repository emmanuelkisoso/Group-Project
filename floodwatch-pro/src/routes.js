import Home from "./Home";
import FloodDetails from "./components/FloodDetails";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/floodDetails/:id",
    element: <FloodDetails />,
  },
];

export default routes;