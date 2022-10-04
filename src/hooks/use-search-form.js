import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useSearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const usableSearchParams = Object.fromEntries(
    searchParams.entries()
  );
  const [pokemon, setPokemon] = useState(
    usableSearchParams.pokemon || ''
  );
  const [type_1, setType_1] = useState(
    usableSearchParams.type_1 || ''
  );

  return {
    pokemon,
    searchForm: usableSearchParams,
    setPokemon,
    setSearchForm: setSearchParams,
    type_1,
    setType_1,
  };
}
