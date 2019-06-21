import React, { Fragment } from "react";
import Header from "../../components/header"; 
import Picture from "../../components/picture";
import Button from "../../components/download";
import Activities from "../../components/atividades";
import List from "../../components/habilidades";
import Form from "../../components/formulario";
import Footer from "../../components/footer";
import Biography from "../../components/biografia";
import Blog from "../../components/blog";





import "./styles.css";

const Main = () => {
  return (
    <Fragment>      
      <Header />     
      <Picture />
      <Button/>     
      <List /> 
      <Activities/>  
      <Blog/>   
      <Biography/>
      <Form />          
      <Footer />
    </Fragment>
  );
};

export default Main;