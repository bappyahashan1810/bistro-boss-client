
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <HelmetProvider>
        <RouterProvider router={routes}>

        </RouterProvider>
      </HelmetProvider>

    </div>
  );
}

export default App;
