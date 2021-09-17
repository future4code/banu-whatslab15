import React from 'react';
import styled from 'styled-components';
import Mensagem from './Components/Mensagem/mensagem'
import './App.css';

const MainConteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
`

export default function App() {

  return (
    <div className= "App">
     <MainConteiner>   
    <mensagem />
    </MainConteiner> 
    </div>
  );
  
    
}

 export default App; 
