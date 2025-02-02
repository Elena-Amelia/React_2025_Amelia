import { ICharacter } from '../types/types';

const baseUrl = 'https://rickandmortyapi.com/api/character/?';

export async function fetchChars(query?: string) {
  let url = '';
  const page = 1;
  if (query) {
    url = baseUrl + `name=${query}`;
  } else {
    url = baseUrl + `page=${page}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data?.results) {
      const chars: ICharacter[] = data.results;
      return chars;
    }
  } catch (error) {
    console.error(error);
  }
}
