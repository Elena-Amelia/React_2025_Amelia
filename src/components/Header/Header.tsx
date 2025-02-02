import { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import ErrorButton from '../ErrorButton/ErrorButton';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export default class Header extends Component<HeaderProps> {
  render() {
    return (
      <header>
        <h1>Rick and Morty</h1>
        <SearchForm onSearch={this.props.onSearch}></SearchForm>
        <ErrorButton />
      </header>
    );
  }
}
