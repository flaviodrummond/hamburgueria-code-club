import React from "react";
import People from './assets/people.svg'
import { Container, H1, Imagem, ContainerItens, InputLabel, Input, Button } from "./styles";


function App() {

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

      </ContainerItens>

    </Container>
  )
};

export default App;