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
import TransCell from './TransCell';

/**
 * @return {html}
 */
const FilterTool = () => {
  const [toggleAscOrder, setToggleAscOrder] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(StateContext);
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
    <thead>
      <tr>
        <TransCell
          metaData={false}
          transactionMetaDataFilter={transactionMetaDataFilter}
        >
          Id
        </TransCell>
        <TransCell
          metaData={false}
          transactionMetaDataFilter={transactionMetaDataFilter}
        >
          Card
        </TransCell>
        <TransCell
          metaData="amount"
          transactionMetaDataFilter={transactionMetaDataFilter}
        >
          Amount
        </TransCell>
        <TransCell
          metaData={false}
          transactionMetaDataFilter={transactionMetaDataFilter}
        >
          status
        </TransCell>
        <TransCell
          metaData="merchant"
          transactionMetaDataFilter={transactionMetaDataFilter}
        >
          Merchant
        </TransCell>
        <TransCell
          metaData="category"
          transactionMetaDataFilter={transactionMetaDataFilter}
        >
          Category
        </TransCell>
        <TransCell
          metaData="created_at"
          transactionMetaDataFilter={transactionMetaDataFilter}
        >
          Created_at
        </TransCell>
      </tr>
    </thead>
  );
};
export default FilterTool;
