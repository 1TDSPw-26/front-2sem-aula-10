import Cabecalho from "./components/Cabecalho";
import {Outlet} from 'react-router';
import Rodape from "./components/Rodape";



export default function App() {
  return (
    <div>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </div>
  )
}
