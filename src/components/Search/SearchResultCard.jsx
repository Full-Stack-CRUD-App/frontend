/* eslint-disable react/prop-types */
import styles from './Search.css';

export default function SearchResultCard({ pokemon, infiniteScrollRef }) {
  return (
    <div className={styles.SearchResultCard} ref={infiniteScrollRef}>
      <h1>{pokemon.pokemon} <span>hp{pokemon.hp}</span></h1>
      <img src={pokemon.url_image} />
      <p>{pokemon.type_1}</p>
    </div>
  );
}
