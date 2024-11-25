import React, { useEffect, useState } from "react";
import api from "../services/api";

const ClinicaList = () => {
  const [clinicas, setClinicas] = useState([]);

  useEffect(() => {
    const fetchClinicas = async () => {
      try {
        const response = await api.get("/listar");
        setClinicas(response.data);
      } catch (error) {
        console.error("Erro ao buscar clínicas:", error);
      }
    };
    fetchClinicas();
  }, []);

  return (
    <div>
      <h1>Clínicas</h1>
      <ul>
        {clinicas.map((clinica) => (
          <li key={clinica._id}>
            <strong>Nome:</strong> {clinica.nome} <br />
            <strong>Endereço:</strong> {clinica.endereco} <br />
            <strong>Telefone:</strong> {clinica.telefone} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClinicaList;
