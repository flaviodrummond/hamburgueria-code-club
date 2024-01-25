import styled from "styled-components";

export const Button = styled.button`
background: ${prosp => prosp.isBack ? `rgba(255, 255, 255, 0.14)` : `#D93856`};
width: 342px;
height: 68px;
padding: 0px 113px;
display: flex;
justify-content: center;
align-items: center;
border: none;
outline: none;
margin: 60px 0 50px 0;

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
}`;