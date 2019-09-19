import React from 'react';
import './App.css';
import Todo from './components/Todo'


class App extends React.Component {
  constructor(){
    super()
    this.state = {todoItems : [
      { text: 'learn React',
        isDone : false
    },
    { text: 'learn Nodejs',
        isDone : false
    },
    { text: 'learn GraphQL',
        isDone : false
    }
    ],
    time:0
    }
    this.onClick = this.onClick.bind(this);
    setInterval(()=>{
      this.setState({time: this.state.time + 1})
    },1000)
  }

  onClick(item){
    return (event) => {
      let index = this.state.todoItems.indexOf(item)
      this.setState( {todoItems: [
          ...this.state.todoItems.slice(0, index),
          {...item, isDone: !item.isDone},
          ...this.state.todoItems.slice(index + 1)
        ]}
      )
    }
  }

  

  render(){
    let { todoItems, time } = this.state;
    return (
      <div className="App">
        <h2>{time}</h2>
        { todoItems.map((item, index) => {
          return <Todo key={index} item={item} onClick={this.onClick} />
        }) }
      </div>
    );
  }
}

export default App;
