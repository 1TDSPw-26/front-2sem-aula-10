import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App.tsx'

import Produto from "./routes/Produto";
import Home from "./routes/Home";
import EditarProduto from "./routes/EditarProdutos";
import Error from "./routes/Errors";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Produto /> },
      { path: "/editar-produtos", element: <EditarProduto /> }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
