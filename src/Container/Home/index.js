import React, { useState, useRef } from "react";
import axios from "axios";
import People from '../../assets/people.svg';
import { Container, H1, Imagem, ContainerItens, InputLabel, Input, Button } from "./styles";


function App() {

  const [clients, setClients] = useState([]);
  const inputRequest = useRef();
  const inputNewClient = useRef();


  //[{id: Math.random(), order: "1 x-salada, 1 coca-cola", clientName:"Flávio"}];

 async function addNewRequest() {

    const { data: newOrder } = await axios.post("http://localhost:3900/order", {
      order: inputRequest.current.value,
      clientName: inputNewClient.current.value
    });

     setClients([...clients, newOrder])  

  }

  return (
    <Container>

      <Imagem alt="logo" src={People} />

      <ContainerItens>

        <H1>Faça seu Pedido !</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputRequest} placeholder="Pedido" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputNewClient} placeholder="Nome do Cliente" />

        <Button to="/pedidos" onClick={addNewRequest}>Novo Pedido</Button>

      </ContainerItens>

    </Container>
  )
};

export default App;