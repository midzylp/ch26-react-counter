import React from 'react';
import ReactDOM from 'react-dom/client';
import  Paragraph from './components/paragraphLink/ParagraphLink';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <p href=>Texto</p> */}
    <Paragraph href="https://www.youtube.com/watch?v=-7hQNuzysco" color="red">Pagina1</Paragraph>
    <Paragraph href="https://www.youtube.com/watch?v=0NlsJuwFsrQ" color="green">Pagina2</Paragraph>
    <Paragraph href="https://www.youtube.com/watch?v=eqy85AL70PU" color="pink">Pagina3</Paragraph>
    <Paragraph href="https://www.youtube.com/watch?v=dWZAH5w8jkQ" color="blue">Pagina4</Paragraph>
  </React.StrictMode>
);
