import { Link, useParams } from 'react-router-dom';
import { useListContext } from '../state/ListsContext';
import { useAuth } from '../state/UserContext';
import Item from './Item';
import ItemForm from './ItemForm.jsx';
import styles from './ShoppingList.css';

export function ShoppingList() {

  const { signOut } = useAuth();
  const { id } = useParams();
  const { items, addItem, buyItem, removeItem } = useListContext(id);
  if (!items) return null;


  const handleAdd = async (item) => {
    await addItem(item);
  };
  
  const handleBuy = async ({ id }) => {
    await buyItem(id);
  };

  const handleRemove = async ({ id }) => {

    await removeItem(id);
  };


  return (
    <section className={styles.ShoppingList}>
      <h2>Shopping List</h2>
      <ItemForm onAdd={handleAdd} />
      <ul className={styles.ItemList}>
        {
          items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onBuy={handleBuy}
              onRemove={handleRemove}
            />
          ))}
      </ul>
      <Link to="signout" onClick={signOut}>Sign Out</Link>
    </section>
  );
}
