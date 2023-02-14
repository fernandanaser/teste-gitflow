import { useContext } from "react";
import { EnderecoContext } from "/../../context/EnderecoContext";

const Endereco = () => {
	const {handleCreateEndereco} = useContext(EnderecoContext)

return (
	<div>
		<h1>Cadastro de endereço</h1>
		<button onClick={handleCreateEndereco}>Cadastrar</button>
	</div>
)
}

export default Endereco;


// import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { APICEP } from "../../api";
// import { AuthContext } from "../../context/AuthContext";
// import { mascaraCEP } from "../../utils/mascaras";

// // Usar yup para validar os campos do form
// const EnderecoSchema = Yup.object().shape({
//   CEP: Yup.string()
//       .min(8, 'Digite um CEP válido')
//       .max(8, 'Digite um CEP válido')
//       .required('Este campo é obrigatório.'),
//   Rua: Yup.string()
//       .required('Campo obrigratório'),
//   Bairro: Yup.string()
//       .required('Campo obrigratório'),
//   Estado: Yup.string()
//       .required('Campo obrigratório'),
// });







//   const { handleAddress} = useContext(AuthContext);
  
//   // Fazer o mesmo tratamento de usuarios para exibir endereço apenas se logado
//   const navigate = useNavigate();
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if(!token) {
//       navigate("/")
//     }
//   }, []);

//   return (
//     // criar um formulário no endereço(com formik)
//     <>
//     <h1>Cadastrar endereço</h1>

//     <Formik
// 				initialValues={{
//           tipo: "",
//           logradouro: "",
//           numero: "",
//           complemento: "",
//           cep: "",
//           cidade: "",
//           estado: "",
//           pais: "",
// 				}}
// 				validationSchema={EnderecoSchema}
// 				onSubmit={(values) => {
// 					handleAddress(values);
// 				}}
// 			>
// 				{({ errors, touched }) => (
// 					<Form>
// 						<label htmlFor='cep'>CEP:</label>
// 						<Field
// 							name='cep'
// 							render={({ field }) => ({mascaraCEP})}
// 						/>

// 						{/* <GetCEP /> */}

// 						{errors.cep && touched.cep ? <div>{errors.cep}</div> : null}

// 						<label htmlFor='logradouro'>Logradouro</label>
// 						<Field name='logradouro' />
// 						{errors.logradouro && touched.logradouro ? (
// 							<div>{errors.logradouro}</div>
// 						) : null}

// 						<label htmlFor='complemento'>Complemento: </label>
// 						<Field name='complemento' />
// 						{errors.complemento && touched.complemento ? (
// 							<div>{errors.complemento}</div>
// 						) : null}

// 						<label htmlFor='bairro'>Bairro: </label>
// 						<Field name='bairro' />
// 						{errors.bairro && touched.bairro ? (
// 							<div>{errors.bairro}</div>
// 						) : null}

// 						<label htmlFor='estado'>Estado: </label>
// 						<Field name='estado' />
// 						{errors.estado && touched.estado ? (
// 							<div>{errors.estado}</div>
// 						) : null}

// 						<button type='submit'>Cadastrar Endereço</button>
// 					</Form>
// 				)}
// 			</Formik>
//     </>
//   )
