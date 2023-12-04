import React, {useContext} from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import whatsimage from './whatsimage.png';
import outlook from './outlook.png';
import { LanguageContext } from './LanguageContext';

function Footer(props) {
  const { texts } = useContext(LanguageContext);
  return (
    <Container id='background-footer' className='Footer' >
      <div className='background-footer'>
        <Row>
          <h4 className='Titulo3'>Othon Abraão S. Fontenele</h4>
        </Row>
        <Col>
          <Row>
            <h5> <img src={whatsimage} alt='' className='whatsapp' /> Whatsapp: (85)99810-5575</h5>
          </Row>
          <h5> <img src={outlook} alt='' className='whatsapp' /> othon.ab@hotmail.com</h5>
        </Col>

        <Col>
          <Row>
            <h5>{texts.contato.redes}</h5>
            <p> <a href="https://www.github.com/othonaf" target="_blank" rel="noreferrer">
              <picture>
                <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github-dark.svg" />
                <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" />
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" alt='' width="32" height="32" />
              </picture>
            </a>
              <a href="https://www.linkedin.com/in/abraão-fontenele-5a4433102/" target="_blank" rel="noreferrer"> <picture>
                <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin-dark.svg" />
                <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" />
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" alt='' width="32" height="32" />
              </picture>
              </a>
              <a href="https://www.youtube.com/@othonabraao7742" target="_blank" rel="noreferrer">
                <picture>
                  <source media="(prefers-color-scheme: dark)" srcset="undefined" />
                  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/youtube.svg" />
                </picture>
              </a>
            </p>
          </Row>
        </Col>
        <Row>
          <h5 className='Titulo4'>2023</h5>
        </Row>
      </div>
    </Container>
  )
};

export default Footer;

