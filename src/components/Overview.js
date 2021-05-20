import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Tasks list</h2>
        <ul>
          {this.props.tasks.map((task) => {
            return (
              <div style={{ display: 'flex', margin: '6px 0' }}>
                <li key={task.id} id={task.id}>
                  {task.number}. 
                  <input type="text" defaultValue={task.text} data-id={task.id} onChange={this.props.changeInput} readOnly={!task.editable ? 'readOnly' : null} />
                </li>
                <button onClick={this.props.editTask} data-id={task.id} style={{ marginLeft: '20px' }}>{!task.editable ? 'edit' : 'done'}</button>
                <button onClick={this.props.handleTask} data-id={task.id} style={{ marginLeft: '20px' }}>delete</button>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;