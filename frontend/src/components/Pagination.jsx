/**
 * @title: Paination.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: bottom table that allows the user to seek the next chunk of transactions
 */
import { useContext } from 'react';
import StateContext from './StateContext';
import FetchApi from './FetchApi';
import constants from '../constants/constants';

const Pagination = () => {
  const { state, dispatch } = useContext(StateContext);
  const { transactions } = state;
  const { currentIndex, TOTALNUMCHUNKS } = transactions;
  const { URL } = constants;

  const dispatchHelper = (data, type, payload) => {
    dispatch({ type, data, currentIndex: payload.pageIndex });
  };

  const isOutOfBounderies = (nextIndex) => {
    if (nextIndex < 0 || nextIndex > TOTALNUMCHUNKS) return true;
    return false;
  };
  const method = 'POST';
  const type = 'GET_CHUNK';

  const getChunk = (direction) => {
    const nextIndex =
      direction === 'next'
        ? Number(currentIndex) + 1
        : Number(currentIndex) - 1;

    if (isOutOfBounderies(nextIndex)) return;

    FetchApi(
      `${URL}getPageIndex`,
      method,
      dispatchHelper,
      { pageIndex: nextIndex },
      type
    );
  };

  const getChunkByIndex = (nextIndex) => {
    if (isOutOfBounderies(nextIndex) || isNaN(nextIndex)) return;
    FetchApi(
      `${URL}getPageIndex`,
      method,
      dispatchHelper,
      { pageIndex: nextIndex },
      type
    );
  };

  const getEndChunks = (ends) => {
    const index = ends === 'beginning' ? 0 : TOTALNUMCHUNKS;
    FetchApi(
      `${URL}getPageIndex`,
      method,
      dispatchHelper,
      { pageIndex: index },
      type
    );
  };

  return (
    <section>
      <div className="roww">
        <div className="colm">{currentIndex <= 0 ? null : currentIndex}</div>
        <div className="colm" />
        <div className="colm">{Number(currentIndex) + 1}</div>
        <div className="colm" />
        <div className="colm">
          {currentIndex >= TOTALNUMCHUNKS ? null : Number(currentIndex) + 2}
        </div>
      </div>
      <div className="roww">
        <div
          className="colm pointer"
          onClick={() => {
            getEndChunks('beginning');
          }}
        >
          Start
        </div>
        <div className="colm pointer" onClick={() => getChunk('previous')}>
          {`<`}
        </div>
        <div className="colm">
          <input
            type="text"
            className="index-getter"
            placeholder={Number(currentIndex) + 1}
            onChange={(e) => {
              const desiredIndex = e.target.value;
              const actualDesiredIndex = Number(desiredIndex) - 1;
              getChunkByIndex(actualDesiredIndex);
            }}
          />
        </div>
        <div
          className="colm pointer"
          onClick={() => getChunk('next')}
        >{`>`}</div>
        <div
          className="colm pointer"
          onClick={() => {
            getEndChunks('end');
          }}
        >
          End
        </div>
      </div>
    </section>
  );
};
export default Pagination;
