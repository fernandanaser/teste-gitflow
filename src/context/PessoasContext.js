import { createContext, useState } from "react";
import { API } from "../api";

const PessoasContext = createContext();

function PessoasProvider({ children }) {

    const [pessoas, setPessoas] = useState([]);
    const [pessoa, setPessoa] = useState();

    // ★★★ NAVEGAÇÃO ★★★
    function goUpdate(idPessoa) {
        window.location.href = `/editar/${idPessoa}`;
    }

    // ⮞⮞⮞ CRUD PESSOAS ⮜⮜⮜

    // ★★★ POST: create ★★★
    async function handleCreatePessoa(usuario) {
        try {
            const { data } = await API.post(`/pessoa`, usuario);
            console.log(data)
            alert("Usuário Cadastrado com sucesso!")
            window.location.href = "/pessoa";
        } catch (error) {
            alert(error)
        }
    }

    // ★★★ GET: read ★★★
    async function getPessoas() { // lista completa de pessoas
        try {
            const { data } = await API.get("/pessoa?pagina=0&tamanhoDasPaginas=20", {
                headers: {
                    Authorization: localStorage.getItem("token") //the token is a variable which holds the token
                }
            })
            setPessoas(data.content);
        } catch (error) {
            alert(error);
        }
    };

    async function getPessoaById(id) { // uma pessoa por id
        try {
            const { data } = await API.get(`/pessoa/lista-completa?idPessoa=${id}`, {
                headers: {
                    Authorization: localStorage.getItem("token") //the token is a variable which holds the token
                }
            })
            setPessoa(data);
        } catch (error) {
            alert(error);
        }
    }

    // ★★★ PUT: update ★★★
    async function handleUpdatePessoa(usuario, id) {
        console.log("entrou handleUpdatePessoa")
        try {
            await API.put(`/pessoa/${id}`, usuario, {
                headers: {
                    Authorization: localStorage.getItem("token") //the token is a variable which holds the token
                }
            })
            window.location.href = "/pessoa"
        } catch (error) {
            alert(error)
        }
    }

    // ★★★ DELETE: delete ★★★
    async function handleDeletePessoa(idPessoa) {
        try {
            await API.delete(`/pessoa/${idPessoa}`);
            // window.location.href = "/pessoa";
            getPessoas();
        } catch (error) {
            alert(error);
        }
    };

    return (
        <PessoasContext.Provider value={{
            handleCreatePessoa,
            getPessoas,
            getPessoaById,
            handleUpdatePessoa,
            handleDeletePessoa,
            goUpdate,
            pessoas,
            pessoa
        }}>
            {children}
        </PessoasContext.Provider>
    )
}

export { PessoasProvider, PessoasContext };