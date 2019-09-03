import React, {Component} from 'react';
import { withAuthorization } from '../Session';
import './btnStyle.css';
//import TodoList, { TodoListLink } from '../To-do/TodoList.js';
import * as ROUTES from '../../constants/routes';
//import TodoList from '../To-do/TodoList';
//import TodoList from '../To-do/TodoList';





/*const HomePage = () => (
  
  <div>
    <h1>Crea la tua lista!</h1>
    <p>Aggiungi le cose da fare alla tua lista; puoi eliminarle semplicemente cliccandoci sopra!</p>
    <button type = "button" onClick = {this.handleClick()}>
      cliccami
    </button>
    
   <TodoList />

   
  </div>
  
);*/

class HomePage extends Component{
  render(){
    return(
      <div>
          <h1>Crea la tua lista!</h1>
          <p>Aggiungi le cose da fare alla tua lista; puoi eliminarle semplicemente cliccandoci sopra!</p>
          {/*<button type = "submit" onClick = {this.handleClick.bind(this)}>
            cliccami
          </button>*/}
          <a href = {ROUTES.LIST} className="btnStyle one"> Crea Lista</a>
          
      </div>
    );
  }
  
  /*handleClick(){
    console.log("il bottone è stato cliccato");
    //ebugger
    this.render(
      <TodoList/>
    );
  }*/
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);