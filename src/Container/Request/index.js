import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Bag from '../../assets/bag.svg'
import Trash from '../../assets/trash.svg'
import { Container, H1, Imagem, ContainerItens, Button, Client, ContainerBag, ContainerMin } from "./styles";


function Request() {

  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  //[{id: Math.random(), order: "1 x-salada, 1 coca-cola", clientName:"Flávio"}];

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

  function goBackHome() {
    navigate("/")
  }

  return (
    <Container>

      <Imagem alt="logo" src={Bag} />

      <ContainerItens>

        <H1> Pedidos </H1>

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

        <Button onClick={goBackHome}>Voltar</Button>

      </ContainerItens>

    </Container>
  )
};

export default Request;