import { createContext, useState } from "react";
import { API } from "../api";

const EnderecoContext = createContext();

function EnderecoProvider ({children}) {

    const [endereco, setEndereco] = useState();

    // ★★★ NAVEGAÇÃO ★★★
    function goEndereco(idPessoa) {
        window.location.href = `/endereco/${idPessoa}`;

    }
    
// ⮞⮞⮞ CRUD ENDEREÇO ⮜⮜⮜

    // ★★★ POST: create ★★★
    async function handleCreateEndereco(idPessoa) {
        try {
            const { data } = await API.post(`/endereco/{idPessoa}?idPessoa=${idPessoa}`, {
                headers: {
                  Authorization: localStorage.getItem("token")
                }
            });
            alert("Endereço cadastrado com sucesso!");
            window.location.href = "/endereco"
            console.log(data)
        } catch (error) {
            alert(error)
        }
    }


        // ★★★ GET: read ★★★    
    async function getEndereco(idPessoa) { // uma pessoa por id
        try {
            const { data } = await API.get(`/endereco/${idPessoa}`, {
                headers: {
                      Authorization: localStorage.getItem("token")
                    }
                })
                setEndereco(data);
            } catch (error) {
                alert(error);
            }
        }

        // ★★★ PUT: update ★★★
        async function handleUpdateEndereco(usuario, id) {
            console.log("entrou handleUpdateEndereco")
            try {
                await API.put(`/endereco/${id}`, usuario, {
                    headers: {
                      Authorization: localStorage.getItem("token")
                    }
                })
                window.location.href = "/endereco"
            } catch (error) {
                alert(error)
            }
        }

    // ★★★ DELETE: delete ★★★
    async function handleDeleteEndereco(idPessoa) {
        try {
            await API.delete(`/endereco/${idPessoa}`);
            window.location.href = "/endereco";
        } catch (error) {
            alert(error);
        }
    };





    return (
        <EnderecoContext.Provider value={{
            goEndereco,
            getEndereco,
            handleCreateEndereco,
            handleUpdateEndereco,
            handleDeleteEndereco
        }}>
            {children}
        </EnderecoContext.Provider>
    )
    }
    
    export { EnderecoContext, EnderecoProvider };


    // const handleAddress = async (cep) => {
    //     const cepSemHifen = cep.replace("-", "")
    
    //     try {
    //       const {data} = await apiCep.get(cepSemHifen+'/json')
    //       setAddress(data);
    
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }

    //     const [pessoas, setPessoas] = useState([]);
    //     const [pessoa, setPessoa] = useState();

//     // ⮞⮞⮞ CRUD ENDEREÇO ⮜⮜⮜

//     // ★★★ POST: create ★★★
//     async function handleCadastraEndereco(usuario) {
//         try {
//             const { data } = await API.post(`/pessoa`, usuario);
//             console.log(data)
//         } catch (error) {
//             alert(error)
//         }
//     }

//     // ★★★ GET: read ★★★
//     async function getPessoas() { // lista completa de pessoas
//         try {
//             const { data } = await API.get("/pessoa?pagina=0&tamanhoDasPaginas=20");
//             setPessoas(data.content);
//         } catch (error) {
//             alert(error);
//         }
//     };

//     async function getPessoaById(id) { // uma pessoa por id
//         try {
//             const { data } = await API.get(`/pessoa/lista-completa?idPessoa=${id}`);
//             setPessoa(data);
//         } catch (error) {
//             alert(error);
//         }
//     }

//     // ★★★ PUT: update ★★★
//     async function handleUpdatePessoa(usuario, id) {
//         try {
//             await API.put(`/pessoa/${id}`, usuario);
//             window.location.href = "/pessoa"
//         } catch (error) {
//             alert(error)
//         }
//     }

//     // ★★★ DELETE: delete ★★★
//     async function handleDeletePessoa(idPessoa) {
//         try {
//             await API.delete(`/pessoa/${idPessoa}`);
//             // window.location.href = "/pessoa";
//             getPessoas();
//         } catch (error) {
//             alert(error);
//         }
//     };

//     // async function handleCep(values) {
//     //     const cep = values.cep.slice(0, 5) + values.cep.slice(6);
//     //     try {
//     //         const { data } = await APICEP.get(`/${cep}/json/`);
//     //         values.bairro = data.bairro;
//     //         values.logradouro = data.logradouro;
//     //         values.estado = data.uf;
//     //         values.complemento = data.complemento;
//     //     } catch (error) {
//     //         console.log(error);
//     //     }
