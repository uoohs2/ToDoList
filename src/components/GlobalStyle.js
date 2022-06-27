import { createGlobalStyle } from 'styled-components';
import '../shared/App.css';

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: "regular";
    background-color:#c7c4ff;
    color: white;
};

a{
    text-decoration: none;
    color:black;
}

input{
    border:none;
}
input:focus{ border: none;}

button{
    outline: none;
    border:none;
    cursor: pointer;
    background-color:#ffffff29;
};
    
`;

export default GlobalStyle;
