import { ReactNode } from 'react';
import { Link } from 'react-router';
import '../../index.css';

export default function NotFoundPage(): ReactNode {
  return (
    <div className="errorBlock flexColumn">
      <h2>404</h2>
      <h2>Page not found</h2>
      <Link to="/">Go to main page</Link>
    </div>
  );
}
