import styled from 'styled-components';
import Background from '../../assets/background.svg';

export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 25px;
height: 100%;
min-height: 100vh;
`;

export const Imagem = styled.img`
margin-top: 11 px;
`;

export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
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