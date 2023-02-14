// import { Formik } from "formik";
// import moment from "moment";
// import { useContext } from "react";
// import { EnderecoContext } from "../../../context/EnderecoContext";
// import { mascaraCPF, mascaraData } from "../../../utils/mascaras";

// const FormularioEnderecoComponent = ({ isUpdate, pessoas, id }) => {
//     const { handleCreateEndereco, handleUpdateEndereco } = useContext(EnderecoContext);
//     const user = pessoas && pessoas[0];

//     if (!user && isUpdate) {
//         return
//     }

//     return (
//         <Formik
//             initialValues={{
//                 tipo: user ? user.tipo : "",
//                 logradouro: user ? user.logradouro : "",
//                 numero: user ? user.numero : "",
//                 complemento: user ? user.complemento : "",
//                 cep: user ? user.cep : "",
//                 cidade: user ? user.cidade : "",
//                 estado: user ? user.estado : "",
//                 pais: user ? user.pais : "",

//             }}
//             onSubmit={(values, actions) => {

//                 const dadosBackend = {
//                     tipo: values.tipo,
//                     logradouro: values.logradouro,
//                     numero: values.numero,
//                     complemento: values.complemento,
//                     cep: values.cep,
//                     cidade: values.cidade,
//                     estado: values.estado,
//                     pais: values.pais,
//                 }

//                 if (!isUpdate) {
//                     handleCreateEndereco(dadosBackend);
//                 } else {
//                     handleUpdateEndereco(dadosBackend, id)
//                 }
//             }}>
//             <h1>teste</h1>

//             {props => (
//                 <form onSubmit={props.handleSubmit}>

//                     <input type="text"
//                         onChange={props.handleChange}
//                         onBlur={props.handleBlur}
//                         value={props.values.tipo}
//                         name="tipo"
//                         placeholder="Tipo:"
//                     />

//                     <input type="text"
//                         onChange={props.handleChange}
//                         onBlur={props.handleBlur}
//                         value={props.values.logradouro}
//                         name="logradouro"
//                         placeholder="Logradouro:"
//                     />

//                     <input type="text"
//                         onChange={props.handleChange}
//                         onBlur={props.handleBlur}
//                         value={props.values.numero}
//                         name="numero"
//                         placeholder="Numero:"
//                     />

//                     <input type="text"
//                         onChange={props.handleChange}
//                         onBlur={props.handleBlur}
//                         value={props.values.complemento}
//                         name="complemento"
//                         placeholder="Complemento:"
//                     />

//                     <input type="text"
//                         onChange={props.handleChange}
//                         onBlur={props.handleBlur}
//                         value={props.values.cep}
//                         name="cep"
//                         placeholder="CEP:"
//                     />

//                     <input type="text"
//                         onChange={props.handleChange}
//                         onBlur={props.handleBlur}
//                         value={props.values.cidade}
//                         name="cidade"
//                         placeholder="Cidade:"
//                     />

//                     <input type="text"
//                         onChange={props.handleChange}
//                         onBlur={props.handleBlur}
//                         value={props.values.estado}
//                         name="estado"
//                         placeholder="Estado:"
//                     />

//                     <input type="text"
//                         onChange={props.handleChange}
//                         onBlur={props.handleBlur}
//                         value={props.values.pais}
//                         name="pais"
//                         placeholder="País:"
//                     />



//                     {props.errors.name &&
//                         <div id="feedback">{props.errors.name}</div>}

//                     <button type="submit">{isUpdate ? "Atualizar" : "Cadastrar"}</button>
//                 </form>
//             )}
//         </Formik>
//     )
// }
// export default FormularioEnderecoComponent;