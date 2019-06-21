import React from "react";
import "./styles.css";

function header() {
    return (
        <>
            <div className="header">            
                <div>
                    <ul id="navBar">
                        <li><a href="#topAnchor">Início</a></li>
                        <li><a href="#portAnchor">Portfólio</a></li>
                        <li><a href="#bioAnchor">Biografia</a></li>
                        <li><a href="#contactAnchor">Contato</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default header;