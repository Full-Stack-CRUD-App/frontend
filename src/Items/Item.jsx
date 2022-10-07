/* eslint-disable react/prop-types */
import { FormButton } from '../components/Form/FormControl';
import styles from './Item.css';

export default function Item({ item, onBuy, onRemove }) {
  const { bought, qty, description } = item;

  return (
    <li className={styles.Item}>

      {bought ? (
        <span className={styles.Bought}>bought</span>
      ) : (
        <FormButton onClick={() => onBuy(item)}>
        
        </FormButton>
      )}


      <span>
        {qty} {description}
      </span>

      <button
        className={styles.RemoveButton}
        onClick={() => onRemove(item)}
      >
        X
      </button>
    </li>
  );
}

