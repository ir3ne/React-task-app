import './App.css';
import uniqid from 'uniqid';
import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        text: '',
        id: uniqid(),
        number: 0
      },
      tasks: []
    }

    this.addTask = this.addTask.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleTask = this.handleTask.bind(this); 
    this.editTask = this.editTask.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        number: this.state.task.number,
        editable: false
      }
    });
  }

  changeInput(e) {
    const editedInput = e.target.value;
    const taskId = e.currentTarget.dataset.id;
    this.setState({
      tasks: this.state.tasks.map(item => {
        if(taskId === item.id) {
          item.text = editedInput
        }
        return item;
      })
    });
  }

  addTask() {
    this.setState({
      task: {
        text: '',
        id: uniqid(),
        number: this.state.task.number + 1
      },
      tasks: [...this.state.tasks, this.state.task]
    });
  }

  handleTask(e) {
    const taskId = e.currentTarget.dataset.id;
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== taskId)
    })
  }

  editTask(e) {
    const taskId = e.currentTarget.dataset.id;
    const taskToEdit = this.state.tasks.filter(task => task.id === taskId);
    if (!taskToEdit.editable) {
      this.setState({
        tasks: this.state.tasks.map(item => {
          if(taskId === item.id) {
            item.editable = !item.editable
          }
          return item;
        })
      });
    }
    
    console.log('test', this.state.tasks);
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleInput} placeholder="Write new task" value={this.state.task.text} type="text" />
        <button onClick={this.addTask}>Add Task</button>
        <Overview tasks={this.state.tasks} editTask={this.editTask} handleTask={this.handleTask} changeInput={this.changeInput} />
      </div>
    );
  }
}

export default App;
