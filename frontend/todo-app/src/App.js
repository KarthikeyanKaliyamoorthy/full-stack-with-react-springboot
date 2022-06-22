import './App.css';
import { Component } from 'react';
import TodoApp from './components/todo/TodoApp';
import './bootstrap.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <TodoApp/>
      </div>
    );
  }  
}

export default App;
