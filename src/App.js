import React from 'react';
import './App.css';
import Todo from './components/Todo'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ListGroup } from 'reactstrap';


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
    time:0,
    text:""
    }
    this.onClick = this.onClick.bind(this);
    setInterval(()=>{
      this.setState({time: this.state.time + 1})
    },1000);
    
    this.inputElement = React.createRef();
    this.onChange = this.onChange.bind(this);

  }
  componentDidMount(){
    this.inputElement.current.focus();
  };


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
  onChange(event){
    console.log(event.keyCode);
    this.setState({
      text: event.target.value
    })
  }
  

  render(){
    let { todoItems, time, text } = this.state;
    return (
      <div className="App">
        <input type='text' onKeyUp={this.onChange} ref={this.inputElement} />
        <p>You input: {text}</p>
        <h2>{time}</h2>
        <ListGroup>
        { todoItems.map((item, index) => {
          return <Todo item={item} key={index} onClick={this.onClick} />
        }) }
        </ListGroup>
      </div>
    );
  }
}

export default App;
