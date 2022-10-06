/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Outlet } from 'react-router-dom';
import {
  createList,
  createListItem,
  deleteListItem,
  updateListItem,
  getLists,
} from '../services/lists.js';

const ListsContext = createContext();


export default function ListsProvider({ children }) {

  const value = {
    // lists,
    // setLists,
    // listsById,
    // addList,
    // updateList,
  };

    
  return (
    <ListsContext.Provider value={value}>
      {children || <Outlet />}
    </ListsContext.Provider>
  );
}
