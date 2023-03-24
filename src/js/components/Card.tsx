import React from 'react'
import styled from '@emotion/styled'

const Card: React.FC<{ key: number; pokemon: any }> = ({ pokemon }) => {
  const CardStyle = styled.div`
    position: relative;
    padding: 40px 10px 10px;
    width: 20%;
    border-radius: 10px;
    margin: 20px 10px;
    box-shadow: 0px 0px 30px 0px gray;
    background-color: #fff;
    cursor: pointer;
    text-align: center;
    transition: all .2s;
    :hover {
      opacity: .5;
      transform: scale(0.9);
    }
    & > img {
      width: 80%;
      height: 60%;
      border-radius: 10px;
    }
    .pokemonNumber{
      position: absolute;
      padding: 2px 25px;
      background: #565454;
      color: #f6f2f2;
      top: 10px;
      left: 15px;
      border-radius: 40px;
      font-size: 5px;
    }
    .border {
      margin: 0 auto;
      display: block;
      width: 50%;
      color: #4b4a4a;
      border: 1px solid;
    }
  `
  return (
    <CardStyle>
      <span className='pokemonNumber'>No. {pokemon.order}</span>
      <img src={pokemon.image} alt="" />
      <span className='border'></span>
      <h3>{pokemon.name}</h3>
    </CardStyle>
  )
}

export default Card
