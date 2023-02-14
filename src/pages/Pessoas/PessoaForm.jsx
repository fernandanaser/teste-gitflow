import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PessoasContext } from "../../context/PessoasContext";
import FormularioComponent from "./Formulario/FormularioComponent";

function PessoaForm() {
  const { id } = useParams();
  const {pessoa, getPessoaById} = useContext(PessoasContext);
  const [isUpdate, setIsUpdate] = useState();

  async function listar() {
    if (id) {
      setIsUpdate(true);
      getPessoaById(id);
    }
  }

  useEffect(() => {
    listar();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>Atualizar ou Cadastrar</h1>
      <FormularioComponent isUpdate={isUpdate} pessoas={pessoa} id={id} />
    </div>
  )
}
export default PessoaForm;