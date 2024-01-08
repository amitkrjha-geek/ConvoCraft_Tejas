import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Chat from './components/Chat';
import store from './utils/store';
import { SnackbarProvider } from 'notistack';
import VoiceRecorderComponent from './components/VoiceRecorder.js';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },{
      path:'/recording',
      element: <VoiceRecorderComponent/>
    }
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
