import React, {Component} from 'react'
import IntroBox from "./components/IntroBox"
import ProjectHolder from "./components/ProjectHolder"
import IntroData from "./components/IntroData"
import './App.css';

class App extends Component {
  render() {
      return (

          <div className="App">
              <IntroBox intro={IntroData}/>
              <ProjectHolder />
          </div>

      )
  }
}

export default App;
