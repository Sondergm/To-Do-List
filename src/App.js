import React, { Component } from 'react'

import './App.css'
import List from './components/list'
import Input from './components/input'
import Monitor from './components/monitor'

class App extends Component {

  state = {
    todos: [],
  }

  // 添加待办事项
  addTodoItem = todo => {
    const { todos } = this.state
    this.setState({
      todos: [ ...todos, {id: todos.length + 1, content: todo, checked: false} ]
    })
  }

  // 删除待办事项
  deleteTodoItem = id => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter(todoItem => todoItem.id !== id)
    })
  }

  // 改变待办事项状态
  checkTodoItem = id => {
    const { todos } = this.state
    let newTodos = []
    todos.map(todoItem => {
      if (todoItem.id === id) {
        newTodos.push({
          ...todoItem,
          checked: !todoItem.checked,
        })
      } else {
        newTodos.push(todoItem)
      }
      return null;
    })
    this.setState({
      todos: newTodos,
    })
  }

  // 消除所有已完成待办
  deleteAllCheckedItems = () => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter(todoItem => todoItem.checked === false)
    })
  }

  // 选择/取消全部待办事项
  checkAllTodoItems = checked => {
    const { todos } = this.state
    let newTodos = []
    todos.map(todoItem => {
      newTodos.push({
        ...todoItem,
        checked,
      })
      return null;
    })
    this.setState({
      todos: newTodos,
    })
  }

  render(){
    const { todos } = this.state
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <Input addTodoItem={this.addTodoItem} />
        <div className="app-todo-container" >
          <List todos={todos} deleteTodoItem={this.deleteTodoItem} checkTodoItem={this.checkTodoItem} />
          <hr/>
          <Monitor todos={todos} deleteAllCheckedItems={this.deleteAllCheckedItems} checkAllTodoItems={this.checkAllTodoItems} />
        </div>
      </div>
    );
  }
}

export default App;