import { InputControl, FormButton } from '../Form/FormControl.jsx';
import styles from './AuthForm.css';


export default function AuthForm() {


  return (
    <form className={styles.AuthForm}>
      <h2>Sign in</h2>
      <InputControl
        label="Email"
        name="email"
        type="email"
      />
      <InputControl
        label="Password"
        name="password"
        type="password"
      />
      <FormButton>Submit</FormButton>
    </form>
  );
}
