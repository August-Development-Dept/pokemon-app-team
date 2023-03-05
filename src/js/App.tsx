import { useEffect, useState } from 'react';
import { getAllPokemon } from './utils/pokemon';

const App = () => {
  const URL = 'https://pokeapi.co/api/v2/pokemon';

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(URL);
      console.log(res);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);
  return (
    <>
      <h1>Hello World</h1>
      <div>{loading ? <h1>ロード中...</h1> : <h1>ポケモンデータを取得しました。</h1>}</div>
    </>
  );
};

export default App;
