import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";
import EditarProdutos from "./routes/EditarProdutos";
import Home from "./routes/Home";
import Produtos from "./routes/Produtos";



export default function App() {
    return (
        <div>
            <App/>
            <EditarProdutos/>
            <Home/>
            <Produtos/>
            <Cabecalho />
            <Conteudo />
            <Rodape />
        </div>
    );
}