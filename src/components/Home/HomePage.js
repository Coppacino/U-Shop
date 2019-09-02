import React from 'react';
import { withAuthorization } from '../Session';
import TodoList from '../To-do/TodoList';

const HomePage = () => (
  <div>
    <h1>Crea la tua lista!</h1>
    <p>Aggiungi le cose da fare alla tua lista; puoi eliminarle semplicemente cliccandoci sopra!</p>
   
    <TodoList />
    
  </div>
  
  
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);