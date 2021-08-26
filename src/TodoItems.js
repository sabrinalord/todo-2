import React, { Component } from "react";

class TodoItems extends Component {
	constructor(props){
		super(props);
		this.createTasks = this.createTasks.bind(this);

	}
	delete(key){
		this.props.delete(key);
	}
	

	createTasks(item){

		return <div className="todo-item">	
			
				 <input 
					key={item.key}
					type="checkbox"	                

				/>
				<p>{item.text}</p>
	
		<div className="todo-item-close" 
		  onClick={() => this.delete(item.key)}>
	      <i className="fa fa-times" aria-hidden="true"></i>
         </div>
      </div>
		
		
	}
	
	
	render() {
		const todoEntries = this.props.entries;
		const listItems = todoEntries.map(this.createTasks);
		
		return (
		  <div className="todoList">
		<h4 className="title">TO DO</h4>
          {listItems}
      </div>
			
		);
	}

}

export default TodoItems;