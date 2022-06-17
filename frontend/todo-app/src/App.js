import './App.css';
import { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent';
import FunctionCmpnt from './components/learning-examples/FunctionCmpnt';
import Counter from './components/counter/Counter';
import TodoComponent from './components/todo/TodoComponent';

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

class LearningComponents extends Component {

  render(){
    return (
      <div className="LearningComponents">
        Hello react
        <FirstComponent/> 
        <FunctionCmpnt/>
      </div>
    );
  }
}
