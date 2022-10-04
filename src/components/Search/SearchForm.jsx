/* eslint-disable react/prop-types */
import {
  FormButton,
  InputControl,
  SelectControl
} from '../Form/FormControl.jsx';
import useSearchForm from '../../hooks/use-search-form.js';
import styles from './Search.css';

export default function SearchForm({ onSubmit }) {
  const { pokemon, setPokemon, type_1, setType_1 } = useSearchForm();
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    onSubmit(formDataObject);
  };

  return (
    <form className={styles.SearchForm} onSubmit={formSubmit}>
      <InputControl 
        label="Search by name"
        type="text"
        name="pokemon"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
      />
      <SelectControl
        label="by type"
        name="type"
        placeholder="Select a type"
        value={type_1}
        onChange={(e) => setType_1(e.target.value)}
      >
        <option value={'bug'}>Bug</option>
        <option value={'dark'}>Dark</option>
        <option value={'dragon'}>Dragon</option>
        <option value={'electric'}>Electric</option>
        <option value={'fairy'}>Fairy</option>
        <option value={'fire'}>Fire</option>
        <option value={'fighting'}>Fighting</option>
        <option value={'flying'}>Flying</option>
        <option value={'ground'}>Ground</option>
        <option value={'ghost'}>Ghost</option>
        <option value={'grass'}>Grass</option>
        <option value={'ice'}>Ice</option>
        <option value={'poison'}>Poison</option>
        <option value={'psychic'}>Psychic</option>
        <option value={'normal'}>Normal</option>
        <option value={'rock'}>Rock</option>
        <option value={'steel'}>Steel</option>
        <option value={'water'}>Water</option>
      </SelectControl>
      <FormButton type="submit">Search</FormButton>
    </form>
  );
}
