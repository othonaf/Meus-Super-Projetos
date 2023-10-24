import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

//const url = "https://api-calcula-taxa-mercado-pago-1644a80e5e8a.herokuapp.com/calculadora";

function Content() {
    const [qtde, setQtde] = useState(0);
    const [valor, setValor] = useState(0);
    const [resultado, setResultado] = useState("");
  
    const calcular = async () => {
      try {
        // Converter os valores para números usando parseInt ou parseFloat
        const qtdeNumber = parseInt(qtde, 10); // Para números inteiros
        const valorNumber = parseFloat(valor); // Para números de ponto flutuante
  
        // Verificar se os valores são válidos
        if (isNaN(qtdeNumber) || isNaN(valorNumber)) {
          setResultado("Os campos Quantidade e Valor devem ser números válidos.");
          return;
        }
        if (qtdeNumber > 12) {
          setResultado("A quantidade máxima de parcelas é 12.");
          return;
        }
  
        const response = await axios.post("http://localhost:3003/calculadora", { qtde: qtdeNumber, valor: valorNumber });
        setResultado(response.data);
      } catch (error) {
        setResultado("Erro ao calcular: " + error.message);
        console.error("Erro ao calcular:", error);
      }
    };

  return (
    <Container className='Content'>
      <Row>
        <Col><h2>Calculadora de Taxas Mercado Pago</h2></Col>
      </Row>
      <Form>
        
        <FormGroup>
          <Label for="valor">Valor a Receber:</Label>
          <Input
            type="number"
            name="valor"
            id="valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="quantidade">Quantidade de Parcelas:</Label>
          <Input
            type="number"
            name="quantidade"
            id="quantidade"
            value={qtde}
            onChange={(e) => setQtde(e.target.value)}
          />
        </FormGroup>
        <Button className='Button' onClick={calcular}>Calcular</Button>
      </Form>
      <Row>
        <Col className='Resultado'>
          <h3>Resultado:</h3>
          {resultado && <p>{resultado}</p>}
        </Col>
      </Row>
    </Container>
  
  );
}

export default Content;
