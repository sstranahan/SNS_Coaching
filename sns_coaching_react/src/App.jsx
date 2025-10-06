
import './App.css'
import './Components.jsx'
import {MyReactButton, ShowMeATree} from "./Components.jsx";

// Constants
const INPUT_PLCHLDR = "Please enter a number 1-300";

var value;

function App() {


    return (
      <>
          <div>
              <header className="App-header">
                  <h1>React Demo Website</h1>
                  <p>This is a basic example of a React application.</p>
                  <input type="text" id="input" defaultValue={0} placeholder={INPUT_PLCHLDR} maxLength={128} size={32}></input>
              </header>
          </div>
          <br/><br/>
          <div>
              <button id="selectButton" onClick={setInputValue()}> Click Me </button>
          </div>
          <br/><br/>
          <div>
              <p id={"outputArea"}></p>
          </div>
      </>
    )
}

export default App

function setInputValue()  {


    const outputArea = document.getElementById("outputArea");
    outputArea.value = value;
}

function inputHandler() {
    const inputElement = document.getElementById("input");
    const value = inputElement.value;

}



