import React, { useState } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3003',
});

const CadastroCliente = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCPF] = useState('');
  const [renda, setRenda] = useState('');
  const [telefone, setTelefone] = useState('');
  const [data_criacao, setDataCriacao] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCadastroCliente = async () => {
    try {
      const token = localStorage.getItem('token');
      const headers = { Authorization: `Bearer ${token}` };
      const data = { nome, email, cpf, renda, telefone, data_criacao };

      const response = await api.post('/inserirRegistro', data, { headers });
      setMensagem(response.data); 
    } catch (error) {
      setMensagem('Erro ao cadastrar cliente:', error);
    }
  };

  return (
    <div>
      <h1>Cadastro de Cliente</h1>
      
      {mensagem && <p>{mensagem}</p>}
      <div>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCPF(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="Renda" value={renda} onChange={(e) => setRenda(e.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      </div>
      <div>
        <input
          type="text"
          placeholder="Data de Criação"
          value={data_criacao}
          onChange={(e) => setDataCriacao(e.target.value)}
        />
      </div>
      <button onClick={handleCadastroCliente}>Cadastrar Cliente</button>
    </div>
  );
};

export default CadastroCliente;
