import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage.tsx';
import DetailedCard from '../components/DetailedCard/DetailedCard.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'details/:id',
        element: <DetailedCard />,
      },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]);
