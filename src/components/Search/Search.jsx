import SearchForm from './SearchForm.jsx';
import SearchResults from './SearchResults.jsx';
import useSearchResults from '../../hooks/use-search-results.js';
import { FormButton } from '../Form/FormControl.jsx';
import styles from './Search.css';

export default function Search() {
  const {
    infiniteScrollRef,
    nextPage,
    pokemon,
    setPokemon,
    searchResults,
    searchPokedex,
  } = useSearchResults();
  return (
    <section className={styles.Search}>
      <SearchForm
        pokemon={pokemon}
        setPokemon={setPokemon}
        onSubmit={searchPokedex}
      />
      <SearchResults
        results={searchResults}
        infiniteScrollRef={infiniteScrollRef}
      />
      <FormButton onClick={nextPage}>more</FormButton>
    </section>
  );
}
