import { useEffect } from 'react';
import { getAllPokemon } from './utils/pokemon';

const App = () => {
  const URL = 'https://pokeapi.co/api/v2/pokemon';
  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(URL);
      console.log(res);
    };
    fetchPokemonData();
  }, []);
  return <h1>Hello World</h1>;
};

export default App;
