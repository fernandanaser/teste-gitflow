import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lista from "../../components/Lista/Lista";
import { PessoasContext } from "../../context/PessoasContext";
import { FaSistrix, FaBell, FaUserCircle } from "react-icons/fa";
import { Background, HeaderPessoas } from "./Pessoas.styles";


const Pessoas = () => {
  const { getPessoas, pessoas } = useContext(PessoasContext);
  const navigate = useNavigate();

  // ★★ funcao para listar pessoas ★★
  async function listarPessoas() {
    getPessoas();
  }

  useEffect(() => {
    listarPessoas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ★★ funcao para ir para cadastrar ★★
  function goCadastrar() {
    navigate("/cadastrar");
  }

  return (
    <div>
      <Background>
        <HeaderPessoas>
          <div>
            <h1>Pessoas</h1>
          </div>
          <div>
            <FaSistrix />
            <FaBell />
            <h3>Usuário</h3>
            <FaUserCircle />
          </div>
        </HeaderPessoas>
        <button onClick={goCadastrar}>Cadastrar</button>
        <Lista listaPessoas={pessoas} />


      </Background>
    </div>
  )
}

export default Pessoas;