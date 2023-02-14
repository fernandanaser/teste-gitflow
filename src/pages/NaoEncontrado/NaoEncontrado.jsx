import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import notfound from "./naoencontrado.svg"

function NaoEncontrado() {
    const {handleLogout} = useContext(AuthContext);
    return (
        <>
            <div><h1> ૮ ˶•~•˶ ა 404: Não Encontrado</h1></div>
            <img
              alt="Não encontrado"
              src={notfound}
              style={{
                marginTop: 50,
                display: 'inline-block',
                maxWidth: '100%',
                width: 560
              }}
            />
            <button onClick={handleLogout}>Voltar ao início</button>
        </>
    )
}
export default NaoEncontrado