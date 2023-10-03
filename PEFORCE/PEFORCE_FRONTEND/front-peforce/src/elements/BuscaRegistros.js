import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';

function RecebeRegistro() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    fetch('http://localhost:3003/visualiza/Registros')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
        navigate('/erro'); // Redireciona para uma página de erro, se necessário.
      });
  }, );

  return (
    <div>
      <h1>Todos os Registros</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            Nome: {item.nome}<br />
            Email: {item.email}<br />
            CPF: {item.cpf}<br />
            Renda: {item.renda}<br />
            Telefone: {item.telefone}<br />
            Data de Criação: {new Date(item.data_criacao).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default RecebeRegistro;
