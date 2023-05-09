//Importar hojas de estilo

import "../../../src/styles/paragraphLink/paragraph-link.css"
import PropTypes from "prop-types"
//Props: Comunican los componentes padres, con los hijos


const ParagraphLink = ({ href, color, children }) => {

    const myParagraph = (
        <>
            <a 
            className="content"
            style={{color: color }} target="_blank" rel="noreferrer"
                href={href}  >
                <p>{children}</p>
            </a>
        </>
    );
    return myParagraph
};

ParagraphLink.propTypes={
    href: PropTypes.string.isRequired
}

export default ParagraphLink; /* Exportación por default */


/* Desestructuración

const [varA, varB] = [23,45]

const {varC, varD} = {varC, varF, varD} 
cada valor se le asigna el nombre adecuado, es decir varC al varC y varD al varD, los de la izquierda son variables y lo de la derecha es un objeto

*/