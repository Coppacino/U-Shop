import React, {Component} from "react";
import TodoItems from './TodoItems';
import "./TodoList.css";


class TodoList extends Component{
    constructor(props){
       
        super(props);

        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    
    
    addItem(e){
        
        if(this._inputElement.value !== ""){
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return{
                    items: prevState.items.concat(newItem)
                };
            });

        }

        this._inputElement.value = "";

        console.log(this.state.items);
        
        e.preventDefault();
        
    }

    deleteItem(key){
        var filteredItems = this.state.items.filter(function(item){
            return(item.key !== key)
        });

        this.setState({
            items: filteredItems
        });
    }

    render(){
        return(
            <div className = "todoListMain">
                <div className = "header">
                    <form onSubmit = {this.addItem}>
                        <input 
                            ref = {(a) => this._inputElement = a}
                            placeholder = "Inserisci elemento"
                        >

                        </input>
                        <button type = "submit">Aggiungi elemento</button>
                    </form>
                </div>
                <TodoItems entries = {this.state.items} 
                            delete = {this.deleteItem}
                />
            </div>
        );
    }
}

const liste = {
    list: [
        <TodoList ></TodoList>
    ]
}

export default TodoList;
export {liste}
