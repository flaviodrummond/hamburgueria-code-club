import styled from 'styled-components'
import Background from './assets/background.svg'


export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 25px;
`;

export const Imagem = styled.img`
margin-top: 11 px;
`;

export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
`;

export const H1 = styled.h1`
color: #FFF;
text-align: center;
font-family: Roboto;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 76px;
`;

export const InputLabel = styled.p`
color: #EEE;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 22px;
margin-left: 15px;
`;

export const Input = styled.input`
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
width: 342px;
height: 58px;
border: none;
outline: none;
padding: 15px;
color: #FFF;

font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: normal;
margin-bottom: 45px;
`;

export const Button = styled.button`
background: #D93856;
width: 342px;
height: 68px;
padding: 0px 113px;
justify-content: center;
align-items: center;
border: none;
outline: none;
margin-top: 60px;

color: #FFF;
text-align: center;
font-size: 17px;
font-style: normal;
font-weight: 900;
cursor: pointer;

&:hover {
    opacity: .8;
}
&:active {
    opacity: .4;
}
`;

export const Client = styled.li`
display: flex;
justify-content: space-around;
height: 58px;

border-radius: 14px;
background: rgba(255, 255, 255, 0.25);

width: 342px;
height: 101px;
flex-shrink: 0;
margin-top: 30px;

button {
background: none;
border: none;
cursor: pointer;
}



`;

export const ContainerBag = styled.div `
display: flex;
justify-content: space-around;

`;

export const ContainerMin = styled.div `
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;

p.One {
color: #FFF;
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: normal
}

p.Two {
color: #FFF;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal
}


`;

