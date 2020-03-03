import React from "react";
import TodoItem from "./TodoItem";
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ""
    };
  }
  click = () => {
    const { list, inputValue } = this.state;
    list.push(inputValue);
    this.setState({
      list,
      inputValue: ""
    });
  };
  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  handleDelete = index => {
    const { list } = this.state;
    list.splice(index, 1);
    this.setState({
      list
    });
  };
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button onClick={this.click}>add</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            //  return <li key={i} onClick={this.delete}>{v}</li>
            return (
              <TodoItem
                index={index}
                key={index}
                content={item}
                delete={this.handleDelete}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
