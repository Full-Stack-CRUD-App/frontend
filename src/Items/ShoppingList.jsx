import { useListContext } from '../state/ListsContext';
import ItemForm from './ItemForm.jsx';
import Item from './Item.jsx';

export function ShoppingList() {
  const { items, addItem } = useListContext();
  console.log(items);



  const handleAdd = async (description, qty) => {
    await addItem({ description, qty, bought: false });
  };



  return (
    <section>


      <ItemForm onAdd={handleAdd} />

      <ul>
        {items &&
          items.map((item, i) => <li key={item.id + i}>
            {item.description}
            {item.qty}
          </li>)}
      </ul>
    </section>
  );
}
