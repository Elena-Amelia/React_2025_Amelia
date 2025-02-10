import { useState, ReactNode, useEffect } from 'react';
import { Character } from '../../types/types';
import '../../index.css';
import Loader from '../Loader/Loader';
import { useParams, useNavigate } from 'react-router';
import { fetchOneChar } from '../../api/api';

interface DetailedCardProps {
  char: Character | null;
  isLoading: boolean;
}

export default function DetailedCard(): ReactNode {
  const initialState: DetailedCardProps = {
    char: null,
    isLoading: false,
  };

  const [pageState, setPageState] = useState(initialState);
  const navigate = useNavigate();
  const params = useParams();

  const id = params.id || '';

  useEffect(() => {
    onSearch(id);
  }, [id]);

  function onSearch(id: string) {
    setPageState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    fetchOneChar(id)
      .then((data) => {
        if (data) {
          setPageState((prevState) => ({
            ...prevState,
            isLoading: false,
            char: data,
          }));
        } else {
          setPageState((prevState) => ({
            ...prevState,
            isLoading: false,
            char: null,
          }));
        }
      })
      .catch((err) => {
        console.error(`Error while searching: ${err}`);
      });
  }

  function closeCard() {
    navigate('/');
  }

  return (
    <>
      {pageState.isLoading ? (
        <Loader />
      ) : pageState.char ? (
        <div className="flexColumn detailedCardWrap">
          <img className="detailedImg" src={pageState.char.image} alt=""></img>

          <div className="flexColumn">
            <h2 className="cardTitle">
              {pageState.char.name ? pageState.char.name : 'n/a'}
            </h2>
            <ul className="cardList">
              <li className="cardLi">
                <b>Status: </b>
                {pageState.char.status ? pageState.char.status : 'n/a'}
              </li>
              <li className="cardLi">
                <b>Species: </b>
                {pageState.char.species ? pageState.char.species : 'n/a'}
              </li>
              <li className="cardLi">
                <b>Type: </b>
                {pageState.char.type ? pageState.char.type : 'n/a'}
              </li>
              <li className="cardLi">
                <b>Gender: </b>
                {pageState.char.gender ? pageState.char.gender : 'n/a'}
              </li>
              <li className="cardLi">
                <b>Origin: </b>
                {pageState.char.origin.name
                  ? pageState.char.origin.name
                  : 'n/a'}
              </li>
              <li className="cardLi">
                <b>Location: </b>
                {pageState.char.location.name
                  ? pageState.char.location.name
                  : 'n/a'}
              </li>
            </ul>
          </div>
          <button onClick={closeCard}>Close</button>
        </div>
      ) : (
        <h2>The character&apos;s info not found</h2>
      )}
    </>
  );
}
