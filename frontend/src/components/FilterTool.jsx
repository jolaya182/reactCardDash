/**
 * @title: FilterTool.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: Top transaction header table filter
 */
import { useContext, useState } from 'react';
import FetchApi from './FetchApi';
import constants from '../constants/constants';
import StateContext from './StateContext';

/**
 * @return {html}
 */
const FilterTool = () => {
  const [toggleAscOrder, setToggleAscOrder] = useState(false);
  const { state, dispatch } = useContext(StateContext);
  const { transactions } = state;
  const { TOTALRECORDS } = transactions;
  const { URL } = constants;
  const method = 'POST';
  const sortHelper = (data, type) => {
    dispatch({ data, type });
  };

  /**
   * Sends the metadata type to the server to sort all the data based
   * on the type
   * @param {string} metaType
   */
  const transactionMetaDataFilter = (metaType) => {
    const type = 'SORT_BY_TYPE';
    FetchApi(
      `${URL}sort`,
      method,
      sortHelper,
      { metaType, toggleAscOrder },
      type
    );
    setToggleAscOrder(!toggleAscOrder);
  };

  return (
    <section>
      TOTALRECORDS: {TOTALRECORDS}
      <div className="roww">
        <div className="colm">Id</div>
        <div className="colm">Card</div>
        <div
          className="colm pointer"
          onClick={() => transactionMetaDataFilter('amount')}
        >
          amount
        </div>
        <div className="colm">status</div>
        <div
          className="colm pointer"
          onClick={() => transactionMetaDataFilter('merchant')}
        >
          merchant
        </div>
        <div
          className="colm pointer"
          onClick={() => transactionMetaDataFilter('category')}
        >
          category
        </div>
        <div
          className="colm pointer"
          onClick={() => transactionMetaDataFilter('created_at')}
        >
          created_at
        </div>
      </div>
    </section>
  );
};
export default FilterTool;
