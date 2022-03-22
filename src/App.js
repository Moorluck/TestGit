import './App.css';
import Bonjour from './components/bonjour/Bonjour';
import SimpleList from './components/simple-list/SimpleList';
import Welcome from './components/welcome/Welcome';
import { nanoid } from "nanoid"

function App() {

  const pokemonNames = [
    { id: nanoid(), name: "Salameche", type: "Feu", level: 12 },
    { id: nanoid(), name: "Carapuce", type: "Eau", level: 14 },
    { id: nanoid(), name:"Bulbizarre", type: "Plante", level: 5 }
  ]

  return (
    <div className="App">
      <SimpleList pokemons={pokemonNames}></SimpleList>
    </div>
  );
}

export default App;
