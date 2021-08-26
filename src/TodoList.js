import React, { Component } from "react";
import TodoItems from "./TodoItems";
 
class TodoList extends Component {
	
	constructor(props){
		super(props);
		
		this.state = {
			items:[
			 {text: "Go to the supermarket",
			  key: 0},
			 {text: "Mow the lawn",
			  key: 1},
			  {text: "Finish react to do list",
			  key: 2},
			 {text: "Bake a cheesecake",
			  key: 3}
			
			]
		};
		
		this.addItem = this.addItem.bind(this)
		this.deleteItem = this.deleteItem.bind(this)
	}
	
	addItem(e){
		if(this._inputElement.value !== ""){
			const newItem = {
				text: this._inputElement.value,
				key: new Date().getTime()
			};
			
			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem)
				};
			});
			this._inputElement.value ="";
		}
		e.preventDefault();
	}
	
	deleteItem(key){
		const filteredItems = this.state.items.filter(function (item){
			return (item.key !== key);
		});
		this.setState({
			items:filteredItems
		});
	}
	
	
  render() {
    return (
      <div className="todo-container">
        <div className="addItem-container">
          <form className="addTaskForm" onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
		placeholder="Enter task...">
            </input>
			<button type="submit"><i className="fa fa-plus" aria-hidden="true"></i>
</button>

          </form>
        </div>
	    <TodoItems entries={this.state.items}
		delete={this.deleteItem}/>
      </div>
    );
  }
}
 
export default TodoList;
