import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DeletaRegistro from './DeletaRegistro';
import CadastroCliente from './criaRegistro';
import BuscaRegistro from './BuscaRegistros';
function SelecionaCaminho() {
  return (
    <div>
      <h1>Escolha uma ação:</h1>
      <ul>
        <li>
          <Link to="deletaRegistro">Deletar um Registro</Link>
        </li>
        <li>
          <Link to="criaRegistro">Criar um Registro</Link>
        </li>
        <li>
          <Link to="buscaRegistros">Visualizar Registros</Link>
        </li>
      </ul>
      <Routes>
        <Route path="deletaRegistro" element={<DeletaRegistro />} />
        <Route path="criaRegistro" element={<CadastroCliente />} />
        <Route path="buscaRegistros" element={<BuscaRegistro />} />
      </Routes>
    </div>
  );
}

export default SelecionaCaminho;
