import React, { useContext } from 'react';
import './App.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import Projetos from './Projetos';
import { LanguageContext } from './LanguageContext';

function Trabalhos() {
    const { texts } = useContext(LanguageContext);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <Container className='Content'>
            <Row>
                <Col>
                    <div class="timeline">
                        <h1 class="heading">{texts.trabalhos.titulo} </h1>
                        <div class="cartao">
                            <div class="cartao-body">
                                <h1 class="cartao-title">2014-2017</h1>
                                <p class="cartao-detail">{texts.trabalhos.detalheCard1}</p>
                            </div>
                        </div>
                        <div class="cartao">
                            <div class="cartao-body">
                                <h1 class="cartao-title">2021-2022</h1>
                                <p class="cartao-detail">{texts.trabalhos.detalheCard2}</p>
                            </div>
                        </div>
                        <div class="cartao">
                            <div class="cartao-body">
                                <h1 class="cartao-title">2020-2022</h1>
                                <p class="cartao-detail">{texts.trabalhos.detalheCard3}</p>
                            </div>
                        </div>
                        <div class="cartao">
                            <div class="cartao-body">
                                <h1 class="cartao-title">2022-2023</h1>
                                <p class="cartao-detail">{texts.trabalhos.detalheCard4}</p>
                            </div>
                        </div>
                        <div class="cartao">
                            <div class="cartao-body">
                                <h1 class="cartao-title">{texts.trabalhos.card5Titulo}</h1>
                                <p class="cartao-detail">{texts.trabalhos.detalheCard5}</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />

                </Col>
            </Row>
            <Row>
                <h3>{texts.trabalhos.titulo2} </h3>
                <Col className='proRea'><Projetos /></Col>

            </Row>
            <Button className='botaoVoltar' onClick={handleClick}>
                {texts.trabalhos.botão}
            </Button>
        </Container>

    );
}

export default Trabalhos;