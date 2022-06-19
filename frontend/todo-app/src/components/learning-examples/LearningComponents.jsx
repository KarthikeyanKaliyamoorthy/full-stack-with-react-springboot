import { Component } from "react";
import FirstComponent from './components/learning-examples/FirstComponent';
import FunctionCmpnt from './components/learning-examples/FunctionCmpnt';

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

  export default LearningComponents