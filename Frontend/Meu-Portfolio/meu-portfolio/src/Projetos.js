import React, { useContext } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import './App.css';
import cardImage from './calc.png';
import { LanguageContext } from './LanguageContext';


const Projetos = () => {
    const { texts } = useContext(LanguageContext);
    const handleClick = () => {
        window.open('https://frontend-calculadora-mercado-p-65eb42d5d0ce.herokuapp.com/', '_blank');
    }
    return (
        <Card className='projetosCard'
            body
            inverse
            style={{
                width: '19rem', 
            }}
        >
            <img className='cardImage' alt="" src={cardImage} />
            <CardBody>
                <CardTitle className='tituloProjeto' tag="h5">
                    {texts.projetos.tituloCard1}
                </CardTitle>
                <CardText className='descProjeto'>
                    {texts.projetos.descCard1}
                </CardText>
                <Button onClick={handleClick}>
                    {texts.projetos.botao}
                </Button>
            </CardBody>
        </Card>
    )
}

export default Projetos;