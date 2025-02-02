import { Component, ReactNode } from 'react';
import { ICharacter } from '../../types/types';
import style from './Card.module.css';

interface CardProps {
  char: ICharacter;
}

export default class Card extends Component<CardProps> {
  render(): ReactNode {
    const { char } = this.props;

    return (
      <>
        <div className={style.cardWrapper}>
          <div>
            <img className={style.cardImg} src={char.image} alt=""></img>
          </div>
          <div className={style.cardContent}>
            <h2 className={style.cardTitle}>{char.name ? char.name : 'n/a'}</h2>
            <ul className={style.cardList}>
              <li className={style.cardLi}>
                <b>Status: </b>
                {char.status ? char.status : 'n/a'}
              </li>
              <li className={style.cardLi}>
                <b>Species: </b>
                {char.species ? char.species : 'n/a'}
              </li>
              <li className={style.cardLi}>
                <b>Type: </b>
                {char.type ? char.type : 'n/a'}
              </li>
              <li className={style.cardLi}>
                <b>Gender: </b>
                {char.gender ? char.gender : 'n/a'}
              </li>
              <li className={style.cardLi}>
                <b>Origin: </b>
                {char.origin.name ? char.origin.name : 'n/a'}
              </li>
              <li className={style.cardLi}>
                <b>Location: </b>
                {char.location.name ? char.location.name : 'n/a'}
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
