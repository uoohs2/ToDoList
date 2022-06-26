import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '../../shared/App.css';

const GlobalStyle = createGlobalStyle`

${reset};

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
};

html{
    min-width : 1440px;
    font-family: "regular";
    font-size: 16px;
    background-color:white;
}

a{
    text-decoration: none;
    color:black;
}

input{
    outline: 1px solid lightgrey;
    border:none;
    border-radius: 5px;
    padding: 5px;
}

button{
    outline: none;
    border:none;
    cursor: pointer;
    background-color:white;
};
    
`;

export default GlobalStyle;
