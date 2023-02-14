import Itensnav from "./Itensnav";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const Nav = () => {

const {logado, handleLogout} = useContext(AuthContext);

  return (
    <nav>
      <ul>
        {/* Se tiver token (está logado) */}
        {!logado ?
          (<>
            <Itensnav name="Home" url="/" />
            <Itensnav name="Cadastro de usuários" url="/usuarios" />
          </>) :
          (<>
            <Itensnav name="Endereço" url="/endereco" />
            <Itensnav name="Pessoa" url="/pessoa" />
          </>)
        }
      </ul>
      {/* botão sair só é mostrado se estiver logado */}
      {logado && <button onClick={handleLogout}>Sair</button>}
    </nav>
  )
}

export default Nav;