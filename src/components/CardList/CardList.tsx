import { ReactNode } from 'react';
import { Character } from '../../types/types';
import Card from '../Card/Card';
import '../../index.css';

interface CardListProps {
  chars: Character[] | [];
}

export default function CardList({ chars }: CardListProps): ReactNode {
  return (
    <div className="flexRow cardBlock">
      {chars.length ? (
        chars.map((char) => <Card key={char.id} char={char}></Card>)
      ) : (
        <h2 className="badResult">No characters found</h2>
      )}
    </div>
  );
}
