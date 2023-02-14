import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { EnderecoProvider } from "./context/EnderecoContext";
import { PessoasProvider } from "./context/PessoasContext";
import EnderecoForm from "./pages/Endereco/EnderecoForm";
import Login from "./pages/Login/Login";
import NaoEncontrado from "./pages/NaoEncontrado/NaoEncontrado";
import PessoaForm from "./pages/Pessoas/PessoaForm";
import Pessoas from "./pages/Pessoas/Pessoas";
import Usuarios from "./pages/Usuarios/Usuarios";


const Routers = () => {

    // const { logado } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <AuthProvider>
                <PessoasProvider>
                    <EnderecoProvider>
                        {/* <Header /> */}
                        <Routes>
                            {/* {!logado ?
                        (<> */}
                            <Route path="/" element={<Login />} />
                            <Route path="/usuarios" element={<Usuarios />} />
                            {/* </>) :
                        (<> */}
                            <Route path="/pessoa" element={<Pessoas />} />
                            <Route path="/cadastrar" element={<PessoaForm />} />
                            <Route path="/editar/:id" element={<PessoaForm />} />
                            <Route path="/endereco/:id" element={<EnderecoForm />} />
                            {/* </>)}; */}
                            <Route path="*" element={<NaoEncontrado />} />
                        </Routes>
                        <Footer />
                    </EnderecoProvider>
                </PessoasProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default Routers;