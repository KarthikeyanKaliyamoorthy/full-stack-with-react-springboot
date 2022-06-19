import './App.css';
import { Component } from 'react';
import TodoComponent from './components/todo/TodoComponent';
import './bootstrap.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <TodoComponent/>
      </div>
    );
  }  
}

export default App;
