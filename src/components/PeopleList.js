import React from 'react';
import { Component } from 'react';
//import { connect } from 'react-redux';
import { chooseCategory } from '../actions/Actions';


class PeopleList extends Component { 

 constructor(props) {
      super(props);
      this.state = { category: props.state[0] };
  }


// создать список людей без повторов по конкретной категории
    getAllPeople = (item) => {        
        let data = this.props.data;       
        let people =[];
        for (var i=0; i<data.length; i++) { 
            let lastItem = people[people.length-1];             
            if (data[i]['categoryId'] === item && data[i]['person'] !== lastItem ) {
                people.push(data[i]['person'])              
            }
        }        
        return people
    }
    
    // создаю li
    renderLi2 = (item) => {         
        return (
        <li key={item} id={item} 
            >{item}</li>
        );
    }
    
    // создаю ul
    renderUl = (item) => {        
        if (item === []) {
            return null
        }
        return (
            <ul key={1}>
            { this.getAllPeople(item).map((item) => this.renderLi2(item)) }
        </ul>
        )       
    }

render() {
    
//    console.log('new state',this.state.category);
//    console.log('people list state', this.props.state);    
    
    return(
        
        <div> { this.renderUl(this.state.category) } </div>
    )
   
    }
}

export default PeopleList;