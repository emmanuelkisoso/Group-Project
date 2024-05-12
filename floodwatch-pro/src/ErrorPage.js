import { useRouteError } from "react-router-dom";
import Header from "./Header";
import "./Error.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <main>
        <h1>Whoops! Something went wrong!</h1>
        <p className="text-center fs-3 m-5">
          {error.statusText || error.message}
        </p>
        <div className="frame">
          <iframe
            src="https://giphy.com/embed/lQlBLrgathaG1f4obw"
            width="480"
            height="270"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
        {/* <p>
          <a href="https://giphy.com/gifs/DefyTVNetwork-duck-dynasty-defytv-lQlBLrgathaG1f4obw">
            via GIPHY
          </a>
        </p> */}
      </main>
    </>
  );
}
