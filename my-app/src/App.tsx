import { Outlet } from 'react-router';
import Cabecalho from './components/Cabecalho/cabecalho';
import Rodape from './components/Rodape';
import ObservadorDeRota from './components/observadorRotas';

export default function App() {
  return (
    <>
      <ObservadorDeRota />
      <Cabecalho />
      <Outlet />
      <Rodape />
    </>
  );
}