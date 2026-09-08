import Cabecalho from './components/Cabecalho'
import Conteudo from './components/Conteudo'
import Rodape from './components/Rodape'

import Home from './routes/Home';
import Produtos from './routes/Produtos';
import EditarProdutos from './routes/EditarProdutos';
import Error from './routes/Error';

export default function App() {
  return (
    <div>
      <Cabecalho />
      <Conteudo />
      <Rodape />  
    </div>
  )
}
