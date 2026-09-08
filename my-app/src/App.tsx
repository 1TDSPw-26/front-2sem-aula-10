import Cabecalho from "./components/Cabecalho/Index"
import Rodape from "./components/Rodape/Index"
import { Outlet } from "react-router"

export default function App() {
  return (
    <div>
      <Cabecalho />
      <Outlet/>
      <Rodape />
    </div>
  )
}
