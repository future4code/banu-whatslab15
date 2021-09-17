import React from "react";
import styled from 'styled-components'


const MainConteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
`
const ContainerMensagem = styled.div`

flex-grow: 1
`

const ContainerInputMensagem = styled.div`

flex-grow:0
`

class Mensagens extends React.Component{
  state ={
      inputApelido: "",
      InputMensagem:""
  };

  onClickAdicionar = () => {
    this.setState({
      inputApelido: "",
      InputMensagem: ""
    } ); 
}
    render() {
         return (
            <MainConteiner>
            <h1>WhatsLab 15</h1>
            <ContainerMensagem> 
            
            </ContainerMensagem>
            <ContainerInputMensagem>
            <input value ={this.state.inputApelido}  />
            <input value ={this.state.InputMensagem} />
            <button onClick={this.onClickAdicionar}>Enviar</button>
            
            </ContainerInputMensagem>
                 
            </MainConteiner>
        );
    }
}