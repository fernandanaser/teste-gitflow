// Páginas agora usando .jsx
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';
import Logo from '../../components/Header/Logo';
import { LoginContainer, Background, Divform, Required, Fieldform } from './Login.styled';

// Usar yup para validar os campos do form
const SignupSchema = Yup.object().shape({
    login: Yup.string()
        .min(2, 'Muito curto, deve possuir no mínimo 2 caracteres.')
        .max(50, 'Muito longo, deve possuir no máximo 50 caracteres.')
        .required('Este campo é obrigatório.'),
    senha: Yup.string()
        .min(2, 'Senha muito curta, deve possuir no mínimo 2 caracteres.')
        .max(50, 'Senha muito longa, deve possuir no máximo 50 caracteres.')
        .required('Este campo é obrigatório.'),
});

const Login = () => {
    const { handleLogin, goCadastro } = useContext(AuthContext);

    return (
        <Background>
            <LoginContainer>
                <Logo />
                <h2>Dashboard Kit</h2>
                <h1>Acessar Dashboard</h1>
                <small>Insira seu usuário e senha abaixo</small>
                <Formik
                    initialValues={{
                        login: '',
                        senha: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        handleLogin(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Divform>
                                <label htmlFor="login">USUÁRIO</label>

                                <Fieldform id="login" name="login" placeholder="Usuário" />
                                {errors.login && touched.login ? (
                                    <Required>{errors.login}</Required>
                                ) : null}

                                <label htmlFor="senha">SENHA</label>

                                <Fieldform id="senha" name="senha" type="password" placeholder="Senha" />
                                {errors.senha && touched.senha ? (
                                    <Required>{errors.senha}</Required>
                                ) : null}

                                <button type="submit">Log In</button>
                            </Divform>
                        </Form>
                    )}
                </Formik>
                <small>Ainda não possui cadastro? <strong onClick={goCadastro}>Cadastrar</strong></small>
            </LoginContainer>
        </Background>
    )
}

export default Login;