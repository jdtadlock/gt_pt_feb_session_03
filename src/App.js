import React, { Component } from 'react';

import Header from './components/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Our App',
      another: 'Some other text',
      color: '#444',
      show_modal: false,
      fruits: ['apple', 'orange', 'grape'],
      people: [
        {
          name: 'JD',
          age: 38,
          selected: false
        },
        {
          name: 'Bob',
          age: 105,
          selected: true
        },
        {
          name: 'Sarah',
          age: 34,
          selected: false
        }
      ]
    }
  }

  changeTitle = () => {
    // this = undefined
    // console.log(this);

    this.setState({
      title: 'Changed Title'
    });

    // this.state.title = 'Something Else';
  }

  handleChange = (event) => {
    // console.log(event.target.name); // title or another

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  toggleModal = () => {
    this.setState({
      show_modal: !this.state.show_modal
    })
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} color={this.state.color} />

        <button onClick={this.toggleModal}>Show Modal</button>

        {/* {this.state.show_modal ? 
          <div className="modal">
            <h1>Modal!</h1>
          </div>
        : ''} */}

        <div className={`modal ${this.state.show_modal ? 'show' : ''}`}>
          <h1>Modal!</h1>
        </div>

        {/* <h1>{this.state.title}</h1> */}
        <p>{this.state.another}</p>
        <button onClick={this.changeTitle}>Change Title</button>

        <input type="text" name="title" onChange={this.handleChange} placeholder="Type Title" />
        <input type="text" name="color" onChange={this.handleChange} placeholder="Type Another" />


        {/* <ul>
          {this.state.fruits.map(fruit => 
            <li key={fruit}>{fruit}</li>
          )}
        </ul> */}
        {/* <div key={person.name} style={{backgroundColor: person.selected ? 'red' : '#fff'}}>
            <h3>Name: {person.name}</h3>
            <p>Age: {person.age}</p>
          </div> */}

        {/* {this.state.people.map(person => 
          <div key={person.name} className={`person ${person.selected ? 'selected' : ''}`}>
            <h3>Name: {person.name}</h3>
            <p>Age: {person.age}</p>
          </div>
        )} */}


        <footer>
          <p>&copy; {new Date().getFullYear()} JD Tadlock</p>
        </footer>
      </div>
    );
  }
}

export default App;
