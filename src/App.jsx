import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;  /* Certifique-se de que a largura da página também ocupe 100% */
  background-color: #000; /* Cor de fundo da página inteira */
`;

const Calculator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e; /* Cor de fundo da calculadora */
  border-radius: 10px;
  padding: 20px;
`;

const Display = styled.div`
  width: 300px;
  height: 50px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: right;
  padding: 10px;
  font-size: 24px;
  margin-bottom: 10px;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 300px;
`;

const Button = styled.button`
  background: ${(props) => (props.$primary ? '#007BFF' : '#ddd')};
  color: ${(props) => (props.$primary ? '#fff' : '#000')};
  border: none;
  padding: 15px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    filter: brightness(0.9);
  }

  /* Ajustes específicos para os botões 0, . e = */
  ${(props) =>
    props.wide &&
    `
    grid-column: span 2;  /* Faz com que o botão ocupe 2 colunas */
  `}
  ${(props) =>
    props.tall &&
    `
    grid-row: span 2;  /* Faz com que o botão ocupe 2 linhas */
  `}
  ${(props) =>
    props.narrow &&
    `
    grid-column: span 1;  /* Faz com que o botão ocupe 1 coluna, mais estreito */
  `}
`;

export default function App() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleClearAll = () => {
    setInput('');
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <Container>
      <Calculator>
        <Display>{input}</Display>
        <ButtonGrid>
          {/* Primeira fileira com botões de operação */}
          {['C', 'CC', '/', '*'].map((item) => (
            <Button key={item} onClick={item === 'C' ? handleClear : item === 'CC' ? handleClearAll : () => handleButtonClick(item)}>
              {item}
            </Button>
          ))}
          {/* Segunda fileira com números e operações */}
          {[7, 8, 9, '-'].map((item) => (
            <Button key={item} onClick={() => handleButtonClick(item)}>
              {item}
            </Button>
          ))}
          {/* Terceira fileira com números e operações */}
          {[4, 5, 6, '+'].map((item) => (
            <Button key={item} onClick={() => handleButtonClick(item)}>
              {item}
            </Button>
          ))}
          {/* Quarta fileira com números */}
          {[1, 2, 3].map((item) => (
            <Button key={item} onClick={() => handleButtonClick(item)}>
              {item}
            </Button>
          ))}
          {/* Botão "=" (agora com largura equivalente a dois botões e embaixo do 3) */}
          <Button key="=" onClick={handleEvaluate} tall>
            =
          </Button>
          {/* Linha inferior com zero e ponto */}
          <Button key="0" onClick={() => handleButtonClick('0')} wide>
            0
          </Button>
          <Button key="." onClick={() => handleButtonClick('.')}>
            .
          </Button>
        </ButtonGrid>
      </Calculator>
    </Container>
  );
}
