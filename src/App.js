import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Category from './components/Category';
import { connect } from 'react-redux'



 const markersInfo = [
    {
        category: 'Исследователи и Путешественники',
        categoryId: 'category1',
        person: 'Колумб',
        markerName: 'firsta',
        lat: 50,
        lng: 50,
        text: 'Some text'
    },
    {
        category: 'Исследователи и Путешественники',
        categoryId: 'category1',
        person: 'Колумб',
        markerName: 'seconda',
        lat: 60,
        lng: 60,
        text: 'Some text'
    },
    {
        category: 'Исследователи и Путешественники',
        categoryId: 'category1',
        person: 'Дарвин',
        markerName: 'firstb',
        lat: 70,
        lng: 50,
        text: 'Some text'
    },
    {
        category: 'Писатели',
        categoryId: 'category2',
        person: 'Магеллан',
        markerName: 'firstc',
        lat: 59,
        lng: 90,
        text: 'Some text'
    },
    {
        category: 'Писатели',
        categoryId: 'category2',
        person: 'Пушкин',
        markerName: 'secondc',
        lat: 50,
        lng: 50,
        text: 'Some text'
    },
    {
        category: 'Писатели',
        categoryId: 'category2',
        person: 'Достоевский',
        markerName: 'firstd',
        lat: 50,
        lng: 50,
        text: 'Some text'
    },
    {
        category: 'Писатели',
        categoryId: 'category2',
        person: 'Достоевский',
        markerName: 'secondd',
        lat: 50,
        lng: 50,
        text: 'Some text'
    },
    ]
    



class App extends Component {   
    
    
  render() {
      
      const store = this.props.store;
      console.log(15, store);
      
      
      
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <div className="category_wrapper">            
            <Category items={markersInfo}/>                      
        </div>
        
       
      </div>
    );
  }
}



export default connect(
  state => ({
    store: state
  }),
  dispatch => ({})
)(App);
