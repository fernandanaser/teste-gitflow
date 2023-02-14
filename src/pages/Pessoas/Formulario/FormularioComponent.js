import { Formik } from "formik";
import moment from "moment";
import { useContext } from "react";
import { PessoasContext } from "../../../context/PessoasContext";
import { mascaraCPF, mascaraData } from "../../../utils/mascaras";

const FormularioComponent = ({ isUpdate, pessoas, id }) => {
    const { handleCreatePessoa, handleUpdatePessoa } = useContext(PessoasContext);
    
    const user = pessoas && pessoas[0];

    if(!user && isUpdate) {
        return
    }

    return (
        
        <Formik
            initialValues={{
                nome: user ? user.nome : "",
                dataNascimento: user ? moment(user.dataNascimento, "YYYY-MM-DD").format("DD/MM/YYYY") : "",
                cpf: user ? user.cpf : "",
                email: user ? user.email : "",
            }}
            onSubmit={(values, actions) => {

                const dadosBackend = {
                    nome: values.nome,
                    cpf: values.cpf.replace(/[^0-9]/gi, ""),
                    dataNascimento: moment(values.dataNascimento, "DD/MM/YYYY").format("YYYY-MM-DD"),
                    email: values.email
                }

                if(!isUpdate) {
                    handleCreatePessoa(dadosBackend);
                } else {
                    handleUpdatePessoa(dadosBackend, id)
                }
            }}>

            {props => (
                <form onSubmit={props.handleSubmit}>

                    <input type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.nome}
                        name="nome"
                        placeholder="Nome"
                    />

                    <input type="text"
                        mask={mascaraData}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.dataNascimento}
                        name="dataNascimento"
                        placeholder="Data de nascimento"
                    />

                    <input type="text"
                        mask={mascaraCPF}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.cpf}
                        name="cpf"
                        placeholder="CPF"
                    />

                    <input type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.email}
                        name="email"
                        placeholder="E-mail"
                    />

                    {props.errors.name &&
                        <div id="feedback">{props.errors.name}</div>}

                    <button type="submit">{isUpdate ? "Atualizar" : "Cadastrar"}</button>
                </form>
            )}
        </Formik>
    )
}
export default FormularioComponent;