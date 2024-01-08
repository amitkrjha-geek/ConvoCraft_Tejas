import './App.css';
import { createBrowserRouter } from 'react-router-dom';

import { RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Chat from './components/Chat';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/chat",
      element: <Chat />,
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
