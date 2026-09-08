import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import Home from './routes/Home/index.tsx'
import Produto from './routes/Produtos/index.tsx'
import EditarProduto from './routes/EditarProdutos/index.tsx'
import Error from './routes/Error/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
