import React, { Component } from 'react'
import "./index.css"

export default class Monitor extends Component {
  render() {
    const { todos, deleteAllCheckedItems, checkAllTodoItems } = this.props
    const checkedTodoItemsNum = todos.filter(todoItem => todoItem.checked === true).length
    return (
      <div className="app-monitor-container" >
        <input 
          type="checkbox" 
          checked={(checkedTodoItemsNum !== 0) && (todos.length === checkedTodoItemsNum)} 
          onChange={(e) => checkAllTodoItems(e.target.checked)} 
        />
        <label>{checkedTodoItemsNum} 已完成 / {todos.length} 全部待办</label>
        <button onClick={deleteAllCheckedItems}>清除所有已完成项</button>
      </div>
    )
  }
}
