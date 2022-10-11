/* eslint-disable react/prop-types */
import { FormButton } from '../components/Form/FormControl';
import styles from './Item.css';

export default function Item({ item, onBuy, onRemove }) {
  const { bought, qty, description } = item;

  return (
    <li className={styles.Item}>

      {bought ? (
        <button className={styles.Bought}></button>
      ) : (
        <FormButton onClick={() => onBuy(item)}>
        
        </FormButton>
      )}


      <span>
        {description} x {qty}
      </span>

      <button
        className={styles.RemoveButton}
        onClick={() => onRemove(item)}
      >
        ❌
      </button>
    </li>
  );
}

