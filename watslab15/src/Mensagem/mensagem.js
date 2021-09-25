import React from 'react';
import styled from 'styled-components';




const MainConteiner = styled.div` 
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
    justify-content: space-between;
    max-height: 300px;
    overflow: auto;
    min-height: 500px;
    border: 2px solid rgb(95, 160, 31);
    padding: 5px;
    border-radius: 5px; 
    background-color:rgba(39, 112, 56, 0.966);
    color: rgb(246, 245, 238);
`

const ContainerMensagem = styled.div`
    
    width:90%;
    margin: 10px;
    overflow: auto;
    height: 400px;
    padding: 5px;
    border-radius: 30px; 
    background-color:rgba(236, 235, 235, 0.753);   
    flex-direction: row;
    padding:5px;
    &:houver{
    cursor: pointer; 
    }`
const ContainerInputMensagem = styled.div`
    display:flex;
    flex-direction: row;
    padding:10px;
`
class Mensagem extends React.Component{
    state = {
        mensagens:[],

        apelidos:"",
        texto:""

    }
    onChangealterarApelido =(evento) => {
        this.setState({apelidos: evento.target.valeu })
    }
    onChangealterarMensagem =(evento)=>{
        this.setState({texto: evento.target.valeu})
    }
    
    adicionarMensagem = () =>{
        
        const novaMensagem = {
           nome: this.state.apelidos,
           mensagem: this.state.texto 
        }
        const mensagensAntigas = [novaMensagem, ...this.state.mensagens]
       
        this.setState({mensagens:mensagensAntigas,texto:''})
        
    }

    render() {
        
        return (
           
           <MainConteiner>
           <h1>WhatsLab 15</h1>
           <ContainerMensagem>
            {this.state.mensagens.map((mensage,index)=>{
                return <p key={index}>
                        <strong>{mensage.nome}</strong>: {mensage.mensagem}
                    </p>
                
            })}
           </ContainerMensagem>

           <ContainerInputMensagem>
           
           <input
            onChange={this.onChangealterarApelido}
            value ={this.state.apelidos}
             placeholder = {"Apelido"}
            />
           
           <input
           onChange={this.onChangealterarMensagem} 
           value ={this.state.texto} 
           placeholder = {"Mensagem"}

            />
           <button onClick={this.adicionarMensagem}>Enviar</button>
           
           </ContainerInputMensagem>
                
           </MainConteiner>
       );
   }

}

export default Mensagem