import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import People from '../../assets/people.svg';
import H1 from "../../components/Title";
import Button from "../../components/Button";
import { Container, Imagem, ContainerItens, InputLabel, Input } from "./styles";


function App() {

  const [clients, setClients] = useState([]);
  const navigate = useNavigate();
  const inputRequest = useRef();
  const inputNewClient = useRef();


  //[{id: Math.random(), order: "1 x-salada, 1 coca-cola", clientName:"Flávio"}];

 async function addNewRequest() {

    const { data: newOrder } = await axios.post("http://localhost:3900/order", {
      order: inputRequest.current.value,
      clientName: inputNewClient.current.value
    });

     setClients([...clients, newOrder]);
     navigate("/pedidos")  

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

        <Button onClick={addNewRequest}>Novo Pedido</Button>

      </ContainerItens>

    </Container>
  )
};

export default App;