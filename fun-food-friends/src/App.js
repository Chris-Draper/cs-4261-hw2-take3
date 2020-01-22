import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';

class App extends Component {
  // app constructor
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handle any changes in the app
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    }
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
  }
  // render app component
  render() {
    return (
      <div className='app'>
        <header>
          <div className='wrapper'>
            <h1>Fun Food Friends</h1>
          </div>
        </header>
        <div className='container'>
          <section className='add-item'>
<<<<<<< HEAD
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
            <input type="text" name="currentItem" placeholder="What are you bringing ?" onChange={this.handleChange} value={this.state.currentItem} />
            <button>Add Item</button>
          </form>
=======
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="username" placeholder="What's your name?"
                onChange={this.handleChange} value={this.state.username}/>
              <input type="text" name="currentItem" placeholder="What are you bringing?"
                onChange={this.handleChange} value={this.state.currentItem}/>
              <button>Add Item</button>
            </form>
>>>>>>> b3dd7c3bf1214be9440b67df4f83bb6064de8cf9
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;