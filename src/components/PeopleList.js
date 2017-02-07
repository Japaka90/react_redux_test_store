import React from 'react';
import { connect } from 'react-redux';
import { chooseCategory } from '../actions/Actions';


class PeopleList extends Component { 

 constructor(props) {
      super(props);
      this.state = { category: null };
  }
}

// создать список людей без повторов по конкретной категории
    getAllPeople = (item) => {
        let people =[];
        for (var i=0; i<markersInfo.length; i++) { 
            let lastItem = people[people.length-1]; 
            if (markersInfo[i]['categoryId'] === item && markersInfo[i]['person'] !== lastItem ) {
                people.push(markersInfo[i]['person'])
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
        console.log('li', this.renderLi2(item));
        return (
            <ul key={1}>
            { this.getAllPeople().map((item) => this.renderLi2(item)) }
        </ul>
        )       
    }

//render {
//    
//}

export default PeopleList;