import { useRouteError } from "react-router-dom";
import Header from "./Header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <main>
        <h1>Whoops! Something went wrong!</h1>
      </main>
    </>
  );
}
