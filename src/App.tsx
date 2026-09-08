import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";

const App = () => {
  return (
    <div className="app-root proton-flow ">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
