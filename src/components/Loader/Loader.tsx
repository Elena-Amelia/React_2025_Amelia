import { ReactNode } from 'react';
import style from './Loader.module.css';

export default function Loader(): ReactNode {
  return <div className={style.loader}></div>;
}
