import { Form, Formik, useFormik } from "formik";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Logo from "../../components/Header/Logo";
import * as Yup from 'yup';
import { LoginContainer, Background, Divform, Required, Fieldform } from './Usuarios.styled';

const SignupSchema = Yup.object().shape({
  nome: Yup.string()
      .min(2, 'Muito curto, deve possuir no mínimo 2 caracteres.')
      .max(50, 'Muito longo, deve possuir no máximo 50 caracteres.')
      .required('Este campo é obrigatório.'),
  senha: Yup.string()
      .min(2, 'Senha muito curta, deve possuir no mínimo 2 caracteres.')
      .max(50, 'Senha muito longa, deve possuir no máximo 50 caracteres.')
      .required('Este campo é obrigatório.'),
});

const Usuarios = () => {
  const { handleSignUp, goHome } = useContext(AuthContext);

  return (
      <Background>
          <LoginContainer>
              <Logo />
              <h2>Dashboard Kit</h2>
              <h1>Cadastrar novo usuário</h1>
              <small>Insira usuário e senha abaixo</small>
              <Formik
                  initialValues={{
                      nomeUsuario: '',
                      senha: '',
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={values => {
                      handleSignUp(values);
                  }}
              >
                  {({ errors, touched }) => (
                      <Form>
                          <Divform>
                              <label htmlFor="nomeUsuario">NOME DE USUÁRIO</label>

                              <Fieldform id="nomeUsuario" name="nomeUsuario" placeholder="Nome de suário" />
                              {errors.nomeUsuario && touched.nomeUsuario ? (
                                  <Required>{errors.nomeUsuario}</Required>
                              ) : null}

                              <label htmlFor="senha">SENHA</label>

                              <Fieldform id="senha" name="senha" type="password" placeholder="Senha" />
                              {errors.senha && touched.senha ? (
                                  <Required>{errors.senha}</Required>
                              ) : null}

                              <button type="submit" onClick={handleSignUp}>Cadastrar</button>
                              <button type="submit" onClick={goHome}>Voltar</button>
                          </Divform>
                      </Form>
                  )}
              </Formik>
          </LoginContainer>
      </Background>
  )
}

export default Usuarios;