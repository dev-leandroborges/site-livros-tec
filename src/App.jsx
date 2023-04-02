import TabelaHead from "./components/TabelaHead"
import TabelaFoot from "./components/TabelaFoot"
import TabelaBody from "./components/TabelaBody"

const App = () => {
  

  return (
    <div>
      
      <tabela ClassName="tabela">

        <TabelaHead />
        <TabelaFoot />
        <TabelaBody />
        
      </tabela>

    </div>
  )
}

export default App;
