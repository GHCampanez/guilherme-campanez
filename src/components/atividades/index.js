import React, {Fragment} from "react";
import AS from "../../resources/images/arquitetura.jpeg"
import API from "../../resources/images/api.jpg"
import "./styles.css";


function Atividades() {
    return (
        <Fragment>
            <div id="backg">
                <h2 id="portAnchor">Alguns dos projetos que ja trabalhei:</h2>
                <div className="atividadesContainerBack">
                    <a href="https://github.com/GHCampanez/Cadastro"><div className="act"><img src={AS} alt=""/><h4 id="textBold">Primeiro trabalho de Arquitetura de Software</h4></div></a>
                    <a href="https://github.com/GHCampanez/API-Arquitetura"><div className="act"><img src={API} alt=""/><h4 id="textBold">API - Arquitetura de Software</h4></div></a>
                </div>
            </div>
        </Fragment>
    )
}

export default Atividades;