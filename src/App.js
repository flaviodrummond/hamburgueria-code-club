import React, { useState, useRef } from "react";
import People from './assets/people.svg'
import Trash from './assets/trash.svg'
import { Container, H1, Imagem, ContainerItens, InputLabel, Input, Button, Client, ContainerBag, ContainerMin } from "./styles";


function App() {

  const [clients, setClients] = useState([]);
  const inputRequest = useRef();
  const inputnewClient = useRef();

  //[{id: Math.random(), order: "1 x-salada, 1 coca-cola", clientName:"Flávio"}];

  function addNewRequest() {

    setClients([...clients, { id: Math.random(), request: inputRequest.current.value, newClient: inputnewClient.current.value }])

  }

  return (
    <Container>

      <Imagem alt="logo" src={People} />

      <ContainerItens>

        <H1>Faça seu Pedido !</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputRequest} placeholder="Pedido" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputnewClient} placeholder="Nome do Cliente" />

        <Button onClick={addNewRequest}>Novo Pedido</Button>

        <ul>
          {
            clients.map(client => (
              <Client key={client.id}>
                <ContainerBag><ContainerMin> <p className="One" >{client.request}  </p>
                  <br></br>
                  <p className="Two" >{client.newClient}</p> </ContainerMin></ContainerBag>
                <button><img alt="Lixeira" src={Trash} /></button>

              </Client>
            ))
          }

        </ul>

      </ContainerItens>

    </Container>
  )
};

export default App;