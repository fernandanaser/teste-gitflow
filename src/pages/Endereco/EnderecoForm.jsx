import { Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EnderecoContext } from "../../context/EnderecoContext";
import FormularioEnderecoComponent from "./FormularioEndereco/FormularioEnderecoComponent";

function EnderecoForm() {

	const {handleCreateEndereco, handleUpdateEndereco, pessoas, id} = useContext(EnderecoContext);
    const user = pessoas && pessoas[0];
    const [isUpdateEndereco] = useState();

    if (!user && isUpdateEndereco) {
        return
    }


  // const { id } = useParams();
//   const {pessoa, getPessoaById} = useContext(PessoasContext);

  return (
    <div>
        <h1>Cadastro de endereço</h1>
        {/* <Formik
            initialValues={{
                // tipo: user ? user.tipo : "",
                // logradouro: user ? user.logradouro : "",
                // numero: user ? user.numero : "",
                // complemento: user ? user.complemento : "",
                // cep: user ? user.cep : "",
                // cidade: user ? user.cidade : "",
                // estado: user ? user.estado : "",
                // pais: user ? user.pais : "",

				tipo: "",
                logradouro: "",
                numero: "",
                complemento: "",
                cep: "",
                cidade: "",
                estado: "",
                pais: "",

            }}
            onSubmit={(values, actions) => {

                const enderecoBackend = {
                    tipo: values.tipo,
                    logradouro: values.logradouro,
                    numero: values.numero,
                    complemento: values.complemento,
                    cep: values.cep,
                    cidade: values.cidade,
                    estado: values.estado,
                    pais: values.pais,
                }

                if (!isUpdateEndereco) {
                    handleCreateEndereco(enderecoBackend);
                } else {
                    handleUpdateEndereco(enderecoBackend, id)
                }
            }}>
            <h1>teste</h1>

            {props => (
                <form onSubmit={props.handleSubmit}>

                    <input type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.tipo}
                        name="tipo"
                        placeholder="Tipo:"
                    />

                    <input type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.logradouro}
                        name="logradouro"
                        placeholder="Logradouro:"
                    />

                    <input type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.numero}
                        name="numero"
                        placeholder="Numero:"
                    />

                    <input type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.complemento}
                        name="complemento"
                        placeholder="Complemento:"
                    />

                    <input type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.cep}
                        name="cep"
                        placeholder="CEP:"
                    />

                    <input type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.cidade}
                        name="cidade"
                        placeholder="Cidade:"
                    />

                    <input type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.estado}
                        name="estado"
                        placeholder="Estado:"
                    />

                    <input type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.pais}
                        name="pais"
                        placeholder="País:"
                    />



                    {props.errors.name &&
                        <div id="feedback">{props.errors.name}</div>}

                    <button type="submit">{isUpdateEndereco ? "Atualizar" : "Cadastrar"}</button>
                </form>
            )}
        </Formik> */}
      {/* <FormularioEnderecoComponent/> */}


      <form>

                    <input type="text"
                        name="tipo"
                        placeholder="Tipo:"
                    />

                    <input type="text"
                        name="logradouro"
                        placeholder="Logradouro:"
                    />

                    <input type="text"
                        name="numero"
                        placeholder="Numero:"
                    />

                    <input type="text"
                        name="complemento"
                        placeholder="Complemento:"
                    />

                    <input type="text"
                        name="cep"
                        placeholder="CEP:"
                    />

                    <input type="text"
                        name="cidade"
                        placeholder="Cidade:"
                    />

                    <input type="text"
                        name="estado"
                        placeholder="Estado:"
                    />

                    <input type="text"
                        name="pais"
                        placeholder="País:"
                    />

                    <button type="submit" onClick={console.log("teste clicando")}>{isUpdateEndereco ? "Atualizar" : "Cadastrar"}</button>
                    </form>
    </div>
  )
}
export default EnderecoForm;