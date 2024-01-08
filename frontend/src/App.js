import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Chat from './components/Chat';
import store from './utils/store';

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
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
