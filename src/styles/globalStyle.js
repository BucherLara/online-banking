import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
font-face {
    font-family: "Inter-Regular";
    src: url("./fonts/Inter-Regular.ttf");
}

font-face {
    font-family: "Inter-Bold";
    src: url("./fonts/Inter-Bold.ttf");
}


:root {
    --primary-color: white; 
    --secondary-color: lightgrey; 
    --third-color: #8daa0b; 
    --font-color: lightgrey;
    --primary-font:  "Inter-Regular";
    --secondary-font: "Inter-Bold"; 

}


body, html {
    margin:0; 
    padding: 0;
    font-family: var(--primary-font),-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-color: var(--primary-color); 
    

}

h1 {
    font-size: 1.5rem; 
   
}`;
export default GlobalStyle;
