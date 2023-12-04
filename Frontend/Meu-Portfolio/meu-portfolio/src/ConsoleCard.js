import React, { useState, useContext } from 'react';
import './App.css';
import { Card, CardBody } from 'reactstrap';
import Typewriter from 'typewriter-effect';
import { LanguageContext } from './LanguageContext';



const ConsoleCard = () => {
  const { texts } = useContext(LanguageContext);
  const [isTyped, setIsTyped] = useState(false);
  const text = texts.console.texto;

  return (
    <Card className="console">
      <CardBody>
        <pre style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>
          <code className='console1'>
            {'Othon@PORTFOLIO '}
          </code>
          <code className='console2'>
            {'HiRe-ME '}
            <code className='console3'>
              {texts.console.console3}
            </code>
          </code> <br />
          <code>
            {isTyped ? `$ ${text}` :
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(`$ ${text}`)
                    .pauseFor(3000)
                    .callFunction(() => {
                      setIsTyped(true);
                    })
                    .start();
                }}
                options={{
                  delay: 50,
                }}
              />
            }
          </code>
        </pre>
      </CardBody>
    </Card>
  );
};

export default ConsoleCard;

