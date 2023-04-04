import axios from 'axios'
import { useEffect, useState } from 'react';

const pokemon = () => {
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
  const [loading, setLoading] = useState(true)
  const [nextUrl, setNextUrl] = useState('')
  const [prevUrl, setPrevUrl] = useState('')
  const [pokemonData, setPokemonData] = useState([])
  let ignore = false
  
  useEffect(() => {
    if (!ignore) {
      getPokemonData(BASE_URL)
    }
    return () => {
      ignore = true;
    }
  }, [])
  
  // レンダリング時にこの関数を実行
  const getPokemonData = async (url: string) => {
    const allPokemonList = await getAllPokemon(url)
    loadPokemon(allPokemonList)
    setLoading(false)
  }
  
  // ポケモン全件取得
  const getAllPokemon = async (url: string) => {
    const res = await axios.get(url)
    const allPokemon = res.data.results
    setNextUrl(res.data.next)
    setPrevUrl(res.data.previous)
    return allPokemon
  }

  // 取得した全ポケモンデータの詳細を取得
  const loadPokemon = async (data: []) => {
    const _pokemonData: any = await Promise.all(
      data.map((pokemon: any) => {
        const pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord
      })
    )
    setPokemonData(_pokemonData)
  }

  // ポケモン個体の詳細データを取得
  const getPokemon = async (url: string) => {
    // 基本情報
    const basicData = await axios.get(url)
    // 詳細情報
    const detailData = await axios.get(basicData.data.species.url)
    
    const nameId = basicData.data.name
    const order = detailData.data.order
    const image = basicData.data.sprites.other['official-artwork']['front_default']
    const names = detailData.data.names.filter(
      ((e: any) => e.language.name === 'ja')
    )
    const name = names[0].name

    return {
      id: nameId,
      image: image,
      name: name,
      order: order
    }
  }

  const handlePrevPage = async () => {
    getPokemonData(prevUrl)
    setLoading(true);
  }
  const handleNextPage = async () => {
    getPokemonData(nextUrl)
    setLoading(true)
  }

  return {
    pokemonData,
    handleNextPage,
    handlePrevPage,
    prevUrl,
    nextUrl,
    loading
  }
}

export default pokemon

