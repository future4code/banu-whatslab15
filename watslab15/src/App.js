import React from 'react';
import styled from 'styled-components';
import Mensagem from './Components/Mensagem/mensagem'
import './App.css';

const MainConteiner = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`


export default function App() {

  return (
    <div className= "App">

    <mensagem />

    </div>
  );
  
    
}

export default App;
