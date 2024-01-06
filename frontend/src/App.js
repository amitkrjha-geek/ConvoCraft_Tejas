import logo from './logo.svg';
import './App.css';
import { RouterProvider, CreateBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Chat from './components/Chat';

function App() {
  const appRouter = CreateBrowserRouter([
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
