import { useEffect, useState } from 'react'
import './App.css'
import Profesors from './components/Profesors/Profesors'
import axios from 'axios';
import StarWars from './components/StarWars/StarWars';

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await axios.get('https://swapi.dev/api/people');
        setCharacters(res.data.results);
      } catch (error) {
        console.error('error', error);
      }
    };
    getCharacters();
  }, [])
  return (
      <div>
        <h1>Star Wars Characters</h1>
        <StarWars characters={characters}/>
        <Profesors/>
      </div>
  )
}

export default App
