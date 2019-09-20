import React, { Component } from 'react';
import classNames from 'classnames';
import './Todo.css';
import checked from '../images/success (1).svg';
import unCheck from '../images/success.svg';

class Todo extends Component {
    render(){
        let url = checked;
        if(!this.props.item.isDone){
            url = unCheck;
        }
        return(
            <div className='content'>
                <img src={url} alt='icon check' onClick={ this.props.onClick(this.props.item)
                 }/>
                <p>{ this.props.item.text }</p>
            </div>
        )
    }
}


export default Todo;