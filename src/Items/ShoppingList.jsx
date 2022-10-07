import { useListContext } from '../state/ListsContext';
import Item from './Item';
import ItemForm from './ItemForm.jsx';
import styles from './ShoppingList.css';

export function ShoppingList() {
  const { items, addItem, buyItem } = useListContext();

  const handleAdd = async (item) => {
    await addItem(item);
  };
  
  const handleBuy = async ({ id }) => {
    await buyItem(id);
  };

  return (
    <section className={styles.ShoppingList}>
      <h2>Shopping List</h2>
      <ItemForm onAdd={handleAdd} />
      <ul className={styles.ItemList}>
        {items &&
          items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onBuy={handleBuy}
              // onRemove={handleRemove}
            />
          ))}
      </ul>
    </section>
  );
}
