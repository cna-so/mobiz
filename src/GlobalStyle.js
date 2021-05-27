import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 html {
   scroll-behavior : smooth
 }
 * {
  box-sizing: border-box; 
  }
 body {
  background : #040714;
  color :#f9f9f9;
  font-family: "Aveniar-Roman" , sans-serif;
  padding: 0;
  margin : 0;
 }
 a {
   color : #f9f9f9;
   text-decoration: none;
 }
 @media only screen and (max-width: 768px){
   body {
     font-size: 1rem;
   }
  }
  @media only screen and (min-width : 480) and (max-width: 768px){
   body {
     font-size: 0.9.5rem;
   }
 }
 @media only screen and  (max-width: 479px){
   body {
     font-size: 0.9rem;
   }
 }
 `;

export default GlobalStyle;
