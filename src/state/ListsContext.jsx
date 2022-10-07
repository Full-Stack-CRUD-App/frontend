import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Outlet } from 'react-router-dom';
import {
  getItems,
  createItem,
  updateItem,
  deleteItem, 
} from '../services/items.js';

const ListsContext = createContext();

// eslint-disable-next-line react/prop-types
export default function ListsProvider({ children }) {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [itemsById, setItemsById] = useState({});

  const fetchItems = async () => {
    const { data, error } = await getItems();

    if (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    if (data) {
      setItems(data);
      const map = data.reduce((map, item) => {
        map[item.id] = item;
        return map;
      }, {});
      setItemsById(map);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);
  
  const addItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const updateItem = (updated) => {
    setItems((items) =>
      items.map((item) => (item.id === updated.id ? updated : item))
    );
    setItemsById((itemsById) => ({
      ...itemsById,
      [updated.id]: updated,
    }));

  };


  
  const value = {
    items, setItems,
    newItem, setNewItem,
    addItems, updateItem
  };

  return (
    <ListsContext.Provider value={value}>
      {children || <Outlet />}
    </ListsContext.Provider>
  );
}

export function useListContext() {
  const [error, setError] = useState(null);
  const { items, setItems } = useContext(ListsContext);

  const addItem = async (item) => {
    const { data, error } = await createItem(item);
    if (error) {
      setError(error.message);
    } else {
      setItems((items) => [...items, data]);
      setError(null);
    }
  };

  const buyItem = async (itemId) => {
    const { data, error } = await updateItem(itemId, {
      bought: true,
    });
  
    if (error) {
      setError(error.message);
    } else {
      const updatedItem = {
        ...items,
        items: items.map((item) =>
          item.id === itemId ? data : item
        ),
      };
      updateItem(updatedItem);
      setError(null);
    }
  };

  const removeItem = async (itemId) => {
    const { error } = await deleteItem(itemId);

    if (error) {
      setError(error.message);
    } else {
      const updatedList = {
        ...items,
        items: items.filter((item) => item.id !== itemId),
      };
      updateItem(updatedList);
      setError(null);
    }
  };

  return { items, error, addItem, buyItem, removeItem };
}


