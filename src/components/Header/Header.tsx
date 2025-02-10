import { ReactNode } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import ErrorButton from '../ErrorButton/ErrorButton';
import '../../index.css';

interface HeaderProps {
  onSearch: (query: string) => void;
  prevValue: string;
}
export default function Header({
  onSearch,
  prevValue,
}: HeaderProps): ReactNode {
  return (
    <header className="flexColumn header">
      <h1>Rick and Morty</h1>
      <div className="flexRow">
        <SearchForm onSearch={onSearch} prevValue={prevValue}></SearchForm>
        <ErrorButton />
      </div>
    </header>
  );
}
