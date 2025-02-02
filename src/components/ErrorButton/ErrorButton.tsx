import { Component, ReactNode } from 'react';
import style from './ErrorButton.module.css';

interface ErrorBtnProps {
  children: ReactNode;
}

interface ErrorBtnState {
  isError: boolean;
}

export default class ErrorButton extends Component<
  ErrorBtnProps,
  ErrorBtnState
> {
  constructor(props: ErrorBtnProps) {
    super(props);
    this.state = {
      isError: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick = () => {
    this.setState({ isError: true });
  };

  render(): ReactNode {
    const { isError } = this.state;
    if (isError) {
      throw new Error('Something went wrong...');
    }
    return (
      <button className={style.button} onClick={this.onClick}>
        Generate Error
      </button>
    );
  }
}
