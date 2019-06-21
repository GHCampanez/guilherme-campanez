import React from "react";
import "./styles.css";
import PersonalPhoto from "../../resources/images/foto.jpg";


function Picture() {
    return (
        <>
        <div>
            <div id="topAnchor">                
                <img src={PersonalPhoto} id="mainPhoto" alt="PersonalPhoto"/>                              
                <p>Apaixonado por IoT, 23 anos de idade </p>
                <p>e com algumas conquistas, quer saber mais?</p>
                <p>dê uma olhada no meu curriculo.</p>
            </div>
            

            <div id = "detalhes">                                     
                    <ul>
                        <h4>Interesses</h4>
                        <li>Aplicações relacionadas a IoT</li>
                        <li>Ecommerce</li>
                    </ul>

                    <ul>
                        <h4>Idiomas</h4>
                        <li>Português - Nativo</li>
                        <li>Inglês - Intermediário</li>
                        <li>Espanhol - Básico</li>
                    </ul>
                    
                    <ul>
                        <h4>Formação</h4>
                        <li>Cursando Engenharia de Software</li>
                    </ul>
                    
                    <ul>
                        <h4>Atividades</h4>
                        <li>Desenvolvimento de atividades relacionadas a IoT</li>
                    </ul>                    
                </div>
            </div>
        </>
    )
}

export default Picture;   