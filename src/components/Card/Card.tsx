import { ReactNode } from 'react';
import { Character } from '../../types/types';
import '../../index.css';

interface CardProps {
  char: Character;
}

export default function Card({ char }: CardProps): ReactNode {
  return (
    <>
      <div className="flexColumn cardWrapper">
        <img className="cardImg" src={char.image} alt=""></img>

        <div className="flexColumn">
          <h2 className="cardTitle">{char.name ? char.name : 'n/a'}</h2>
          <ul className="cardList">
            <li className="cardLi">
              <b>Status: </b>
              {char.status ? char.status : 'n/a'}
            </li>
            <li className="cardLi">
              <b>Species: </b>
              {char.species ? char.species : 'n/a'}
            </li>
            <li className="cardLi">
              <b>Type: </b>
              {char.type ? char.type : 'n/a'}
            </li>
            <li className="cardLi">
              <b>Gender: </b>
              {char.gender ? char.gender : 'n/a'}
            </li>
            <li className="cardLi">
              <b>Origin: </b>
              {char.origin.name ? char.origin.name : 'n/a'}
            </li>
            <li className="cardLi">
              <b>Location: </b>
              {char.location.name ? char.location.name : 'n/a'}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
