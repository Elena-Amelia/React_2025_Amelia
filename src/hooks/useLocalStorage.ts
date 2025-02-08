import { useState } from 'react';
import { LocalStorageKey } from '../localStorage/localStorage';

export default function useLocalStorage(): [string, (value: string) => void] {
  const [query, setQuery] = useState(() => getInitValue());

  const updateQuery = (query: string) => {
    setQuery(query);
    localStorage.setItem(LocalStorageKey, query);
  };
  return [query, updateQuery];
}

function getInitValue() {
  const localStorageValue = localStorage.getItem(LocalStorageKey);
  let initValue = '';

  if (localStorageValue) {
    initValue = localStorageValue;
  }
  return initValue;
}
