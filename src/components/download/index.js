import React from "react";
import "./styles.css";
import pdf from "../../resources/images/Guilherme.pdf"

const clickButton = () =>(
<a id = "pdf" href={pdf} download>
        <button className="btn">Baixar Currículo</button>
    </a>
);
export default clickButton;