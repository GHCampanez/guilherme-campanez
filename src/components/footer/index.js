import React from 'react';
import "./styles.css";
import FaceImg from "../../resources/images/face.png";
import InstaImg from "../../resources/images/insta.png";
import WhatsImg from "../../resources/images/whats.png";
import GitImg from "../../resources/images/GitHub-Mark.png"

const Footer = () => {
    return (
        <>
        <div id="footer">
        <div id="social">                               
                <ul>
                    <li>
                        <a href = "https://facebook.com/GHCampanez" target = "blank">
                            <img src={FaceImg} alt="facebook logo"></img>
                        </a>
                    </li>
                    <li>
                        <a href = "https://instagram.com/GHCampanez" target = "blank">
                            <img src={InstaImg} alt="instagram logo"></img>
                        </a>
                    </li>                              
                    <li>
                        <a href = "https://wa.me/5514997571217?text=">
                            <img src={WhatsImg} alt="whatsapp logo"></img>
                        </a>
                    </li> 
                    <li>
                        <a href = "https://www.github.com/GHCampanez">
                            <img src={GitImg} alt="github logo"></img>
                        </a>
                    </li>                                    
                </ul>
            </div>
        
            
                <p>Guilherme Henrique Attis Campanez - Desenvolvimento web 2019</p>
                <p>guilhermecampanez@alunos.utfpr.edu.br</p>
                <p>+55(14)99757-1217</p>
            </div>
        </>
    );
};

export default Footer;