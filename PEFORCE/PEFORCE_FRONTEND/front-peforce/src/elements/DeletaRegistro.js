import React, { useState } from 'react';

function DeletaRegistro() {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = () => {
    // Obtenha o token de uma fonte segura
    const token = getSecureToken();

    fetch(`http://localhost:3003/registro/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `${token}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setMessage('Registro deletado com sucesso!');
        } else {
          setMessage('Você não tem permissão para executar esta ação.');
        }
      })
      .catch((error) => {
        console.error('Erro ao deletar registro:', error);
        setMessage('Algo deu errado.');
      });
  };

  return (
    <div>
      <h1>Deletar Registro</h1>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Digite o ID do registro"
      />
      <button onClick={handleDelete}>Deletar Registro</button>
      <p>{message}</p>
    </div>
  );
}

function getSecureToken() {
  // Obtenha o token do armazenamento local
  const token = localStorage.getItem('token');
  
  // Retorne o token
  return token;
}
export default DeletaRegistro;
