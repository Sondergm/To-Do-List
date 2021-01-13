import React, { Component } from 'react'
import "./index.css"

export default class List extends Component {
  render() {
    const { todos, deleteTodoItem, checkTodoItem } = this.props
    return (
      <div className="app-list-container" >
        <ul>
          {todos.length === 0 ? 
          <div>暂无待办事项，快来创建一个吧～</div> : 
          todos.map(todoItem => {
            return (
              <li key={todoItem.id}>
                <label>
                  <input type="checkbox" checked={todoItem.checked} onChange={() => checkTodoItem(todoItem.id)} /> {todoItem.content}
                </label>
                <button onClick={() => deleteTodoItem(todoItem.id)} >删除</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
