import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Chat from './components/chat/Chat.js';
import store from './utils/store';
import { SnackbarProvider } from 'notistack';
import VoiceRecorderComponent from './components/VoiceRecorder.js';
import Profile from './components/Profile.js';
import DynamicPage from './components/chat/chat/DynamicPage.js';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/chat",
      element: <Chat />,
      // children: [
      //   ,
      // ],
    },
    {
          path: "/chat/:id",
          element: <DynamicPage/>,
    },
    {
      path: "/recording",
      element: <VoiceRecorderComponent />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
      </SnackbarProvider>
      
    </Provider>
  );
}

export default App;
