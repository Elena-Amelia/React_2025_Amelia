import { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import ErrorButton from '../ErrorButton/ErrorButton';
import '../../index.css';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export default class Header extends Component<HeaderProps> {
  render() {
    return (
      <header className="flexColumn header">
        <h1>Rick and Morty</h1>
        <div className="flexRow">
          <SearchForm onSearch={this.props.onSearch}></SearchForm>
          <ErrorButton />
        </div>
      </header>
    );
  }
}
