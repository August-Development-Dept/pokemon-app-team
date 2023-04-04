import styled from '@emotion/styled';
import Card from './components/Card';
import pokemon from './utils/pokemon';

const App = () => {
  const {
    loading,
    pokemonData,
    prevUrl,
    nextUrl,
    handleNextPage,
    handlePrevPage
  } = pokemon()

  const PokemonBook = styled.div`
    .book {
      text-align: center;
      background-color: #ffffff;
      padding: 20px;
    }
    .pokemonCardContainer {
      width: 900px;
      padding: 20px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .buttons {
      margin-bottom: 100px;
    }
    .button {
      border: none;
      padding: 10px 30px;
      border-radius: 5px;
      background-color: #57e087;
      color: #fff;
      transition: all .2s;
      :hover {
        transform: scale(1.1);
      }
      &.disabled {
        background-color: #a7a2a2;
        :hover {
          transform: scale(1);
        }
      }
    }
    .ml-30 {
      margin-left: 30px;
    }
  `

  return (
    <PokemonBook>
      <div className='book'>
        <h2>ポケモン図鑑</h2>
        {loading ? <p>Now Loading</p> : ''}
        <div className='pokemonCardContainer'>
          {pokemonData.map((pokemon: any, index) => {
            {pokemon}
            return (
              <Card key={index} pokemon={pokemon}></Card>
              )
            })}
        </div>
        <div className='buttons'>
          {
            prevUrl
            ? <button className='button' onClick={handlePrevPage}>← Prev</button>
            : <button className='button disabled' onClick={handlePrevPage} disabled>← Prev</button>
          }
          {
            nextUrl
            ? <button className='button ml-20' onClick={handleNextPage}>Next →</button>
            : <button className='button ml-20 disabled' onClick={handleNextPage} disabled>Next →</button>
          }
        </div>
      </div>
    </PokemonBook>
  );
};

export default App;
