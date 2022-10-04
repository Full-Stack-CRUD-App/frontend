import styles from './Dashboard.css';
import {
  InputControl,
  SelectControl,
  TextAreaControl,
  CheckboxControl,
  FormButton
} from '../Form/FormControl';

export default function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      <form>

        <InputControl
          label="Name"
          name="name"
          placeholder="your name"
        />
        
        <InputControl
          label="Date"
          required
          type="date"
          name="date"
        />


        <SelectControl
          label="Option"
          required
          name="option"
          placeholder="select an option"
        >
          <option value="1">A</option>
          <option value="2">B</option>
          <option value="3">C</option>
        </SelectControl>

        <TextAreaControl
          label="Bio"
          name="bio"
          placeholder="tell us about yourself"
        />

        <CheckboxControl legend="Do you accept our terms and services?"
          label="I accept" />
        
      
        <FormButton>Submit</FormButton>
      </form>
    </div>
  );
}
