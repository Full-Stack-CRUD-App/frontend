import styles from './Dashboard.css';
import {
  InputControl,
  SelectControl,
  // TextAreaControl,
  // CheckboxControl,
  FormButton
} from '../Form/FormControl';

export default function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      <form>

        <InputControl
          label="Item"
          name="item"
          placeholder="enter an item"
          required
        />
        
        <InputControl
          label="Quantity"
          required
          type="number"
          name="quantity"
          placeholder="enter quantity"
        />


        <SelectControl
          label="Urgency"
          required
          name="urgency"
          placeholder="when do you need this item?"
        >
          <option value="now">now</option>
          <option value="tomorrow">tomorrow</option>
          <option value="whenever">whenever</option>
        </SelectControl>


      
        <FormButton>Add item</FormButton>
      </form>
    </div>
  );
}
