import { Component, ReactNode } from 'react';
import { fetchChars } from '../../api/api';
import Header from '../Header/Header';
import Card from '../Card/Card';
import { ICharacter } from '../../types/types';
import styles from './Content.module.css';

interface ContentProps {
  query: string | null;
}

interface ContentState {
  chars: ICharacter[] | [];
}

const LocalStorageKey = 'lastQueryFromTask#1';

export default class ContentPage extends Component<ContentProps, ContentState> {
  constructor(props: ContentProps) {
    super(props);
    this.state = {
      chars: [],
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(query: string) {
    localStorage.setItem(LocalStorageKey, query);

    fetchChars(query)
      .then((data) => {
        if (data) {
          this.setState({ chars: data });
        } else {
          this.setState({ chars: [] });
        }
      })
      .catch((err) => {
        console.error(`Error while searching: ${err}`);
      });
  }

  setInitialState = () => {
    const localStorageValue = localStorage.getItem(LocalStorageKey);

    if (localStorageValue) {
      this.onSearch(localStorageValue);
    } else {
      fetchChars().then((data) => {
        if (Array.isArray(data)) {
          this.setState({ chars: data });
        }
      });
    }
  };

  componentDidMount(): void {
    this.setInitialState();
  }

  render(): ReactNode {
    const { chars } = this.state;

    return (
      <>
        <Header onSearch={this.onSearch}></Header>
        <main>
          <div className={styles.contentWrapper}>
            {chars.length ? (
              chars.map((char) => <Card key={char.id} char={char}></Card>)
            ) : (
              <h2>No characters found</h2>
            )}
          </div>
        </main>
      </>
    );
  }
}
