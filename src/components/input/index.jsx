import React, { Component } from 'react'
import './index.css'

export default class Input extends Component {

  handleSubmit = e => {
    if (e.keyCode !== 13) return
    const { target: { value } } = e;
    if (value === "") {
      alert("请先输入要做的事！")
      return
    }
    this.props.addTodoItem(value)
    e.target.value = ""
  }

  render() {
    return (
      <div>
        <input onChange={this.handleInput} onKeyUp={this.handleSubmit} className="app-search" type="text" placeholder="请输入你要做的事..." />
      </div>
    )
  }
}
