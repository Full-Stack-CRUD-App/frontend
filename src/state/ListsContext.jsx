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
} from '../services/items.js';

const ListsContext = createContext();

// eslint-disable-next-line react/prop-types
export default function ListsProvider({ children }) {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItems = (item) => {
    setItems((items) => [...items, item]);
  };


  const fetchItems = async () => {
    const { data, error } = await getItems();

    if (error) {
      console.log(error);
    }
    if (data) {
      setItems(data);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);
  
  const value = {
    items, setItems,
    newItem, setNewItem,
    addItems
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

  return { items, error, addItem };
}


