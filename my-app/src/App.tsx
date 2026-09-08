import Cabecalho from './components/Cabecalho'
import Conteudo from './components/Conteudo'
import Rodape from './components/Rodape'
import { Outlet } from 'react-router';


export default function App() {
  return (
    <div>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </div>
  );
}
