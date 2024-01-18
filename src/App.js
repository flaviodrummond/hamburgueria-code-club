import React, { useState }from "react";
import People from './assets/people.svg'
import Trash from './assets/trash.svg'
import { Container, H1, Imagem, ContainerItens, InputLabel, Input, Button, Client, ContainerBag, ContainerMin } from "./styles";


function App() {

  const [ clients, setClients ] = useState([]);
  const [ request, setRequest ] = useState();
  const [ newClient, setNewClient ] = useState();
  
  //[{id: Math.random(), order: "1 x-salada, 1 coca-cola", clientName:"Flávio"}];

  function addNewRequest() {
    setClients([{id: Math.random(), request, newClient}])

  }

  function changeInputRequest(event) {
    setRequest(event.target.value)
  }

  function changeInputNewClient(event) {
    setNewClient(event.target.value)
  }

  return (
    <Container>

      <Imagem alt="logo" src={People}/>

      <ContainerItens>

      <H1>Faça seu Pedido !</H1>

      <InputLabel>Pedido</InputLabel>
      <Input onChange={changeInputRequest} placeholder="Pedido"/>

      <InputLabel>Nome do Cliente</InputLabel>
      <Input onChange={changeInputNewClient} placeholder="Nome do Cliente"/>

      <Button onClick={addNewRequest}>Novo Pedido</Button>

      <ul>
        {
          clients.map( client =>(
        <Client key={client.id}>
          <ContainerBag><ContainerMin> <p className="One" >{client.request}  </p>
          <p className="Two" >{client.newClient}</p> </ContainerMin></ContainerBag>
          <button><img alt="Lixeira" src= {Trash}/></button>

        </Client>
          ))
        }
       
      </ul>

      </ContainerItens>

    </Container>
  )
};

export default App;