import React, { useState } from "react";
import api from "../services/api";

const ClinicaForm = ({ clinicaExistente }) => {
  const [clinica, setClinica] = useState(
    clinicaExistente || { nome: "", endereco: "", telefone: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClinica({ ...clinica, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (clinica._id) {
        await api.put(`/atualizar/${clinica._id}`, clinica);
      } else {
        await api.post("/criar", clinica);
      }
      alert("Clínica salva com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar clínica:", error);
      alert("Erro ao salvar clínica.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={clinica.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Endereço:</label>
        <input
          type="text"
          name="endereco"
          value={clinica.endereco}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type="text"
          name="telefone"
          value={clinica.telefone}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default ClinicaForm;
