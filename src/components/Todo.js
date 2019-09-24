import React, { Component } from 'react';
import classNames from 'classnames';
import './Todo.css';
import checked from '../images/success (1).svg';
import unCheck from '../images/success.svg';
import { ListGroupItem } from 'reactstrap';

class Todo extends Component {
    render(){
        let url = checked;
        if(!this.props.item.isDone){
            url = unCheck;
        }
        return(
                <ListGroupItem>
                    <img src={url} alt='icon check' onClick={ this.props.onClick(this.props.item)
                 }/>
                <p>{ this.props.item.text }</p>
                </ListGroupItem>
        )
    }
}


export default Todo;