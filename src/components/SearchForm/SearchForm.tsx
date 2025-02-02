import { ChangeEvent, Component, FormEvent } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
}

interface SearchState {
  value: string;
}

export default class SearchForm extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      value: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSearch(this.state.value.trim());
  };

  onChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form className="search__form" onSubmit={this.onSubmit}>
        <input
          type="search"
          placeholder="Search a character..."
          className="search__input"
          value={this.state.value}
          onChange={this.onChange}
        />
        <button type="submit" className="search__button">
          Submit
        </button>
      </form>
    );
  }
}
