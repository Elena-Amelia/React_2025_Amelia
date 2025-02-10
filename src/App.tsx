import './App.css';
import { ReactNode } from 'react';
import ContentPage from './components/ContentPage/ContentPage';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

export default function App(): ReactNode {
  return (
    <ErrorBoundary>
      <ContentPage />;
    </ErrorBoundary>
  );
}
