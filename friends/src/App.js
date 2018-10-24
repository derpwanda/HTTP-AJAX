import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendList';
import AddFriendForm from './components/AddFriendForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',

    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      })
  }

  // addFriendHandler = e => {
  //   this.setState({ 
  //     name : e.target.name,
  //     age: e.target.age,
  //     email: e.target.email,
  //    });
  // }

  // submitFriendHandler = e => {
  //   e.preventDefault();
  //   const friend = {
  //     name: this.state.name,
  //     age: e.target.age,
  //     email: e.target.email,
  //   }
  //   axios
  //     .post('http://localhost:5000/friends', { friend })
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error));
  // }


  render() {
    return (
      <div className="App">
      <FriendsList friends={this.state.friends} />
      <AddFriendForm 
        friend={this.state.friends}
        addFriendHandler={this.addFriendHandler}
      />
      </div>
    );
  }
}

export default App;
