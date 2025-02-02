import { Component, ReactNode } from 'react';
import style from './Loader.module.css';

export default class Loader extends Component {
  render(): ReactNode {
    return <div className={style.loader}></div>;
  }
}
