import { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export default class Header extends Component<HeaderProps> {
  // constructor(props:HeaderProps){
  //   super(props);
  //   this.state = {
  //     value: '',
  //   };

  //   this.onSearch = this.onSearch.bind(this);

  // }
  // onSearch=()=> {
  //   this.setState({value: this.state.value})
  // }
  render() {
    return (
      <header>
        <SearchForm onSearch={this.props.onSearch}></SearchForm>
      </header>
    );
  }
}
