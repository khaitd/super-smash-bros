
import './App.css';
import Fighter from './components/Fighter';
import FighterScreen from './components/FighterScreen';
import {useState} from 'react';


const characters = [
  {name: "Roy",color: "red"},
  {name: "Fox", color: "green"},
  {name: "Ganondorf", color: "purple"},
  {name: "Sheik", color: "lightskyblue"},
  {name: "Mario", color: "silver"},
  {name: "Yoshi", color: "lightskyblue"},
  {name: "Bowser", color: "blue"},
  {name: "Link", color: "lightskyblue"},
  {name: "jigglypuff", color: "lightskyblue"},
  {name: "Pikachu", color: "orange"}
]


function App() {
  const [visible, setVisible] = useState(false)
  const [selectCharacter, setSelectedCharacter ]  = useState(characters[0]);

  return (
    <div className="App">
      <h1>  Fighters</h1>
      <div className="fighters-grid" >

        {characters.map((element,i) => {
           return (<Fighter name={element.name} color={element.color} setVisible={setVisible} selectCharacter={selectCharacter} setSelectedCharacter={setSelectedCharacter}/>)
        })
        }
         
      </div>    
        <FighterScreen isVisible={visible} setVisible={setVisible} selectCharacter={selectCharacter} />


    </div>
  );
}

export default App;
