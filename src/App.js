import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import router from "./components/Routes/Routes";

function App() {
  return (
    <div data-theme="light" className="max-w-[2041px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
