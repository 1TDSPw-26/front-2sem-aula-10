import { Outlet } from 'react-router';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import ObservadorDeRota from './components/ObservadorDeRotas';

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