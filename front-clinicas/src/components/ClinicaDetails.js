import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

const ClinicaDetails = () => {
  const { id } = useParams();
  const [clinica, setClinica] = useState(null);

  useEffect(() => {
    const fetchClinica = async () => {
      try {
        const response = await api.get(`/${id}`);
        setClinica(response.data);
      } catch (error) {
        console.error("Erro ao buscar clínica:", error);
      }
    };
    fetchClinica();
  }, [id]);

  return (
    <div>
      {clinica ? (
        <div>
          <h1>{clinica.nome}</h1>
          <p>
            <strong>Endereço:</strong> {clinica.endereco}
          </p>
          <p>
            <strong>Telefone:</strong> {clinica.telefone}
          </p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default ClinicaDetails;
