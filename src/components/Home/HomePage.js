import React, {Component} from 'react';
import { withAuthorization } from '../Session';
import './home.css';
import {liste} from '../To-do/TodoList';
import Modal from '../Modal/modal'




class HomePage extends Component{

  render(){

  return(    
    <div>
      <h1>Crea la tua lista!</h1>
      <p className= "paragrafo">Aggiungi le cose da fare alla tua lista; puoi eliminarle semplicemente cliccandoci sopra!</p>
      <Modal></Modal>
      
    </div>
    );
  }
 
  handleClick(){debugger
    console.log(liste.list.length);
  }
}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);