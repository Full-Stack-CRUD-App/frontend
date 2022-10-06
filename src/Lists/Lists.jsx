import AddForm from '../components/Form/AddForm';
import styles from './Lists.css';

export function Lists() {
  return (
    <section className={styles.Lists}>
      <h2>Lists</h2>
      <AddForm placeholder="add a new list..." />
    </section>
  );
}
