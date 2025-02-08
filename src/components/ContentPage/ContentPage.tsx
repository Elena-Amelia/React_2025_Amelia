import { ReactNode, useEffect, useState } from 'react';
import { fetchChars } from '../../api/api';
import Header from '../Header/Header';
import Card from '../Card/Card';
import { Character } from '../../types/types';
import Loader from '../Loader/Loader';
import '../../index.css';
import useLocalStorage from '../../hooks/useLocalStorage';

interface ContentProps {
  chars: Character[] | [];
  isLoading: boolean;
}

export default function ContentPage(): ReactNode {
  const initialState: ContentProps = {
    chars: [],
    isLoading: false,
  };

  const [pageState, setPageState] = useState(initialState);
  const [query, setQuery] = useLocalStorage();

  useEffect(() => {
    onSearch(query);
  }, [query]);

  function onSearch(query: string) {
    setPageState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    fetchChars(query)
      .then((data) => {
        if (data) {
          setPageState((prevState) => ({
            ...prevState,
            isLoading: false,
            chars: data,
          }));
        } else {
          setPageState((prevState) => ({
            ...prevState,
            isLoading: false,
            chars: [],
          }));
        }
      })
      .catch((err) => {
        console.error(`Error while searching: ${err}`);
      });
  }

  return (
    <>
      <Header onSearch={setQuery} prevValue={query}></Header>
      <main>
        {pageState.isLoading ? (
          <Loader />
        ) : (
          <div className="flexRow">
            {pageState.chars.length ? (
              pageState.chars.map((char) => (
                <Card key={char.id} char={char}></Card>
              ))
            ) : (
              <h2 className="badResult">No characters found</h2>
            )}
          </div>
        )}
      </main>
    </>
  );
}
