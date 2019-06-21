import React from "react";
import "./styles.css";


function Form() {
    return (
        <>            
            <h2>Entre em contato comigo pelo formulário:</h2>
                <form action="https://formspree.io/guilhermecampanez@alunos.utfpr.edu.br" method="POST" id="contactAnchor">
                    <div className="formContainer">
                        <input type="text" name="name" placeholder="Nome"/>
                        <input type="email" name="_replyto" placeholder="Email"/>
                        <input type="text" name="assunto" placeholder="Assunto"/>
                        <textarea id="story" name="story" rows="5" cols="33" placeholder="Texto..."/>
                        <button type="submit" id="buttonSubmit" >Enviar</button>
                    </div>
                </form>            
        </>
    )
}

export default Form;