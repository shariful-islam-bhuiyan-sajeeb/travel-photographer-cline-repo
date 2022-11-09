
import { RouterProvider } from 'react-router-dom';

import router from './components/Routes/Routes';

function App() {
  return (
    <div data-theme="light" className=" w-5/6 mx-auto">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
