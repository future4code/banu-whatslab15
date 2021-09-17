import React from "react";
import styled from 'styled-components'


const MainConteiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height:100% ;
  background-color:greenyellow;
`
const ContainerMensagem = styled.div`

`

const ContainerInputMensagem = styled.div`

display:flex;
flex-direction: row;
`

class Mensagens extends React.Component{
  state ={
      inputApelido: "",
      InputMensagem:""
  };

  alterarApelido = (e) => {
    this.setState({ inputApelido: e.target.value });
  };

  alterarMensagem = (e) =>{
    this.setState({InputMensagem: e.target.value});
  }


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
                <p>Mensagem</p>

            </ContainerMensagem>
            <ContainerInputMensagem>
            <p>Apelido</p>
            <input value ={this.state.inputApelido} onChange={this.alterarApelido} />
            <p>Mensagem</p>
            <input value ={this.state.InputMensagem} onChange={this.alterarMensagem} />
            <button onClick={this.onClickAdicionar}>Enviar</button>
            
            </ContainerInputMensagem>
                 
            </MainConteiner>
        );
    }
}

export default Mensagens;