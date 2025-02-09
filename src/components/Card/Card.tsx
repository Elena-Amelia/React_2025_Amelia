import { ReactNode } from 'react';
import { Character } from '../../types/types';
import '../../index.css';
import { Link } from 'react-router';

interface CardProps {
  char: Character;
}

export default function Card({ char }: CardProps): ReactNode {
  return (
    <>
      <div className="flexColumn cardWrapper">
        <img className="cardImg" src={char.image} alt=""></img>
        <h2 className="cardTitle">{char.name ? char.name : 'n/a'}</h2>
        <Link to={`details/${char.id}`}>Show more</Link>
      </div>
    </>
  );
}
