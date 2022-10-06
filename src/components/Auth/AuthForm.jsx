import {
  InputControl,
  FormButton
} from '../Form/FormControl.jsx';
import styles from './AuthForm.css';


export default function AuthForm() {


  return (
    <form className={styles.AuthForm}>
      <h2>Sign in</h2>
      <InputControl
        label="Email"
        name="email"
        type="email"
        required
      />
      <InputControl
        label="Password"
        name="password"
        type="password"
        required
      />
      <FormButton>Submit</FormButton>
    </form>
  );
}
