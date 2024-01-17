import React from "react";
import People from './assets/people.svg'
import Trash from './assets/trash.svg'
import { Container, H1, Imagem, ContainerItens, InputLabel, Input, Button, Client, ContainerBag, ContainerMin } from "./styles";


function App() {

  const client = [{id: Math.random(), order: "1 x-salada, 1 coca-cola", clientName:"Flávio", price: 39.90, status:"Em preparação"}];

  return (
    <Container>

      <Imagem alt="logo" src={People}/>

      <ContainerItens>

      <H1>Faça seu Pedido !</H1>

      <InputLabel>Pedido</InputLabel>
      <Input placeholder="Pedido"/>

      <InputLabel>Nome do Cliente</InputLabel>
      <Input placeholder="Nome do Cliente"/>

      <Button>Novo Pedido</Button>

      <ul>
        {
          client.map( client =>(
        <Client key={client.id}>
          <ContainerBag><containerMin> <p>{client.order}  </p>
          <p>{client.clientName}</p> </containerMin></ContainerBag>
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