import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import People from './assets/people.svg'
import Trash from './assets/trash.svg'
import { Container, H1, Imagem, ContainerItens, InputLabel, Input, Button, Client, ContainerBag, ContainerMin } from "./styles";


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

  useEffect(() => {
    async function fetchClients(){
      const { data: newClient} = await axios.get("http://localhost:3900/order");
     setClients(newClient);
    }

    fetchClients()
  }, [])

  async function deleteRequest(clientId) {
    await axios.delete(`http://localhost:3900/order/${clientId}`);
    const newRequest = clients.filter(client => client.id !== clientId);
    setClients(newRequest)

  }

  return (
    <Container>

      <Imagem alt="logo" src={People} />

      <ContainerItens>

        <H1> Pedidos </H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputRequest} placeholder="Pedido" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputNewClient} placeholder="Nome do Cliente" />

        <Button onClick={addNewRequest}>Novo Pedido</Button>

        <ul>
          {
            clients.map(client => (
              <Client key={client.id}>
                <ContainerBag><ContainerMin> <p className="One" >{client.order}  </p>
                  <br></br>
                  <p className="Two" >{client.clientName}</p> </ContainerMin></ContainerBag>
                <button onClick={() => deleteRequest(client.id)} ><img alt="Lixeira" src={Trash} /></button>

              </Client>
            ))
          }

        </ul>

      </ContainerItens>

    </Container>
  )
};

export default App;