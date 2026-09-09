import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo/conteudo";
import Rodape from "./components/Rodape/index";

export default function App() {
  return (
    <div>
    
      <Cabecalho />
        <Outlet/>
      <Rodape/>
    </div>
  )
}