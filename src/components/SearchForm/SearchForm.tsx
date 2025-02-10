import { ChangeEvent, useState, FormEvent, ReactNode } from 'react';
import '../../index.css';

interface SearchProps {
  onSearch: (query: string) => void;
  prevValue: string;
}

export default function SearchForm({
  onSearch,
  prevValue,
}: SearchProps): ReactNode {
  const [value, setValue] = useState(prevValue);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearch(value.trim());
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        type="search"
        placeholder="Search a character..."
        className="inputSearch"
        value={value}
        onChange={onChange}
      />
      <button type="submit" className="buttonSearch iconSearch">
        <span></span>
      </button>
    </form>
  );
}
