import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App.tsx'


import Home from './routes/home/index';
import Produtos from './routes/Produtos/index';
import EditarProdutos from './routes/EditarProdutos/index';
import Error from './routes/Error/index';

import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Produtos /> },
      { path: "/editar-produtos", element: <EditarProdutos /> }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
