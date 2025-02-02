import { Component, ReactNode } from 'react';

interface ErrorProps {
  children: ReactNode;
}

interface ErrorState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    console.log('Someting went wrong...');
  }

  onClick = () => {
    this.setState({ hasError: false });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Someting went wrong...</h2>
          <button onClick={this.onClick}>Reset error</button>
        </div>
      );
    }

    return this.props.children;
  }
}
